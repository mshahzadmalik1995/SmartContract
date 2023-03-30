const {getNamedAccounts, deployments, ethers} = require("hardhat");
const {developmentChains} = require("../../helper-hardhat-config");
const {assert} = require("chai");

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Raffle Unit Tests", async function() {
        let raffle, vrfCoordinatorV2Mock;
        
        beforeEach(async function() {
            const {deployer} = await getNamedAccounts();
            await deployments.fixture(["all"]);
            raffle = await ethers.getContract("Raffle", deployer);
            vrfCoordinatorV2Mock = await ethers.getContractAt("VRFCoordinatiorV2Mock", deployer);
        })
        describe("constructor", async function(){
            it("Initializes the raffle correctly", async function() {
                const raffleState = await raffle.getRaffleState();
                assert,equals(raffleState.toString(), "0");
            })
        })
    })