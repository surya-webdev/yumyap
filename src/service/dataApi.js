import { supabase } from "./supabase";
import useCreateGuest from "./useCreateGuest";
import { useCurrAuth } from "./useCurrAuth";

export async function getRestaurant() {
  const { data: restaurant, error } = await supabase
    .from("restaurant")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Couln&apos;t find the restaurants ");
  }

  return restaurant;
}

export async function getRestaurantById(id) {
  const { data: restaurant, error } = await supabase
    .from("restaurant")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return restaurant;
}

export async function newUser({ email, password, name }) {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName: name,
        avatar: "",
      },
    },
  });

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  } else {
    return user;
  }
}

export async function loginUser({ email, password }) {
  // const { mutate, isLoading } = useCreateGuest();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error.message);
    throw new Error();
  }
  // console.log(data);
  return data;
}

export async function currUserAuth() {
  //
  const { data } = await supabase.auth.getSession();

  if (!data) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  } else {
    // console.log(user);
    await storeUserInfo(user);

    return user;
  }
}

///////////////////////////////////////////////////////
// updating the guest

export const storeUserInfo = async (user) => {
  // checking the user is already exist
  const emailExists = await checkEmailExists(user.email);

  if (!emailExists) {
    //
    const { data, error } = await supabase.from("users").insert({
      email: user.email,
      fullName: user.user_metadata.fullName, // Assuming you collect full name during sign up
    });
    if (error) {
      console.error(error.message);
      throw error("couldn't get the user");
    }
    return data;
  } else {
    return null;
  }
};

async function checkEmailExists(email) {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("email")
      .eq("email", email)
      .single();

    if (error && error.code !== "PGRST116") {
      throw error;
    }

    return !!data; // Returns true if email exists, false otherwise
  } catch (error) {
    console.error("Error checking email:", error.message);
    throw error;
  }
}

// orders
/////////////////////////////////////////////////////////////////////

export async function getOrdersbyId(email) {
  console.log(email);

  const { data: users, error } = await supabase
    .from("users")
    .select("orders")
    .eq("email", email)
    .single();

  if (error) {
    console.error(error.message);
    throw error("couldn't get the orders of user");
  }
  console.log(users);
  return users;
}

export async function updateOrders({ order, email }) {
  console.log(order);

  const orders = await getOrdersbyId(email);

  const currentOrders = orders?.orders || [];

  // console.log(currentOrders);

  const newOrders = [...currentOrders, order];
  // console.log(newOrders);

  //
  const { data, error } = await supabase
    .from("users")
    .update({ orders: newOrders })
    .eq("email", email)
    .select();
  if (error) throw new Error("Couldn't update the user's orders");

  return data;
}
