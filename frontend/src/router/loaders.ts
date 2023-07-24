import URL from "./url";

interface Params {
  id: string;
}

export const indexLoader = async () => {
  const response = await fetch(URL + "/phone");
  const phones = await response.json();
  return phones;
};

export const showLoader = async ({ params }: { params: Params }) => {
  const response = await fetch(URL + `/phone/${params.id}`);
  const phone = await response.json();
  return phone;
};
