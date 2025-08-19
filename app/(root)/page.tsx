const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const HomePage = async () => {
    await delay(2000);

    return <>Prostore</>;
};

export default HomePage;
