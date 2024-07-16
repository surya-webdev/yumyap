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
