import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("name must be at least 2 characters")
    .min(2, "name must be at least 2 characters"),

  size: yup.string().oneOf(["small", "medium", "large"], "Size is required."),

  specialInstructions: yup.string(),

  sauce: yup
    .string()
    .oneOf(
      ["originalRed", "garlicRanch", "bbqSauce", "spinachAlfredo"],
      "Sauce is required."
    ),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  canadianBacon: yup.boolean(),
  spicyItalianSausage: yup.boolean(),
  grilledChicken: yup.boolean(),
  onions: yup.boolean(),
  greenPepper: yup.boolean(),
  dicedTomatos: yup.boolean(),
  blackOlives: yup.boolean(),
  roastedGarlic: yup.boolean(),
  artichokeHearts: yup.boolean(),
  threeCheese: yup.boolean(),
  pineapple: yup.boolean(),
  extraCheese: yup.boolean(),
});

export default formSchema;
