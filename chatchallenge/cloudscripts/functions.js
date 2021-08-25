Moralis.Cloud.define("hasToken", async (request) => {
    const query = new Moralis.Query("EthTokenBalance");
    query.equalTo("address", request.params.useraddr);
    query.equalTo("symbol", request.params.symbol);

    const results = await query.find();

    return results.length > 0
});

Moralis.Cloud.define("postMessage", async (request) => {
    // await Moralis.Cloud.run("getBob");
    const query = new Moralis.Query("Chats");
    query.equalTo("address", request.params.useraddr);
    query.equalTo("symbol", request.params.symbol);

    const results = await query.find();

    return results.length > 0
});