let Flashloaner = artifacts.require("Flashloaner")

module.exports = async function (deployer) {
    try {
        await deployer.deploy(Flashloaner)
    } catch (e) {
        console.log(`Error in migration: ${e.message}`)
    }
}
