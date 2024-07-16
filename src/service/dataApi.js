import { supabase } from "./supabase";

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
  console.log(id);
  const { data: restaurant, error } = await supabase
    .from("restaurant")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Couln&apos;t find the restaurants ");
  }

  return restaurant;
}

export async function newUser({ email, password, name }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    data: {
      fullName: name,
      avatar: "",
    },
  });

  if (error) {
    console.error(error.message);
    throw new Error("Couln&apos;t signup please try again ");
  }
  return data;
}

export async function loginUser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error.message);
    throw new Error();
  }

  return data;
}

export async function currUserAuth() {
  const { data } = await supabase.auth.getSession();

  if (!data) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return user;
}
