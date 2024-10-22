export const getCountryDetails = async ({ params }) => {
  // console.log(params);
  const name = params.country;
  // console.log(name);

  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );

    if (!response.ok) {
      throw new Error("Country not found");
    }

    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
