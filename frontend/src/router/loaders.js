import URL from "./url";

export const indexLoader = async () => {
  const response = await fetch(URL + "/phone");
  const { phones, popularPhones } = await response.json();
  return { phones, popularPhones };
};

export const showLoader = async ({ params }) => {
  const response = await fetch(URL + `/phone/${params.id}`);
  const phone = await response.json();
  return phone;
};
