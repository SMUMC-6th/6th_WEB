const trendApi = async () => {
  try {
    const response = await fetch("http://localhost:3000/posts", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export default trendApi;
