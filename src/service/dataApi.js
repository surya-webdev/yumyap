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

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error(error.message);
    throw new Error(error.message);
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

// user

export async function getUser(email) {
  // console.log(email);
  const { data: users, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error) {
    console.error(error.message);
    throw error("couldn't get the orders of user");
  }

  return users;
}

// orders
/////////////////////////////////////////////////////////////////////

export async function getOrdersbyId(email) {
  const { data: users, error } = await supabase
    .from("users")
    .select("orders")
    .eq("email", email)
    .single();

  if (error) {
    console.error(error.message);
    throw error("couldn't get the orders of user");
  }

  return users;
}

export async function updateOrders({ order, email }) {
  const orders = await getOrdersbyId(email);

  const currentOrders = orders?.orders || [];

  const newOrders = [...currentOrders, order];

  //
  const { data, error } = await supabase
    .from("users")
    .update({ orders: newOrders })
    .eq("email", email)
    .select();
  if (error) throw new Error("Couldn't update the user's orders");

  return data;
}

export async function deleteOrders({ email, id }) {
  const orders = await getOrdersbyId(email);

  const newData = orders?.orders.filter((el) => el.id !== id);

  const { data, error } = await supabase
    .from("users")
    .update({ orders: newData })
    .eq("email", email)
    .select();
  if (error) throw new Error("Couldn't delete the cart");

  return data;

  //
}
// delete cart by email
export async function deleteCart(email) {
  console.log(email);
  const initalState = [];
  const { data, error } = await supabase
    .from("users")
    .update({ orders: initalState })
    .eq("email", email)
    .select();
  if (error) throw new Error("Couldn't delete the cart");

  return data;
}

// Confirm orders

export async function getConfirmOrders(email) {
  const { data: users, error } = await supabase
    .from("users")
    .select("confirmOrders")
    .eq("email", email)
    .single();

  if (error) {
    console.error(error.message);
    throw error("couldn't get the orders of user");
  }

  return users;
}

export async function confirmOrders(data) {
  //

  const orders = await getConfirmOrders(data?.address?.email);

  const currentOrders = orders?.confirmOrders || [];

  const newOrders = [...currentOrders, { data }];

  // console.log(newOrders);

  const { data: order, error } = await supabase
    .from("users")
    .update({ confirmOrders: newOrders })
    .eq("email", data?.address?.email)
    .select();
  if (error) throw new Error("Couldn't update the user's orders");

  const cartDelete = deleteCart(data?.address?.email);

  return cartDelete, order;
}

export async function getOrderData(email) {
  console.log(email);

  const { data: users, error } = await supabase
    .from("users")
    .select("confirmOrders")
    .eq("email", email);

  if (error) throw new Error("Couldn't update the user's orders");

  return users;
  //
}
