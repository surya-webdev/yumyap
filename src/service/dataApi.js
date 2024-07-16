import { supabase } from "./supabase";

export async function getRestaurant() {
  let { data: restaurant, error } = await supabase
    .from("restaurant")
    .select("*");

  if (error) throw new Error("Couln&apos;t find the restaurants ");

  return restaurant;
}
