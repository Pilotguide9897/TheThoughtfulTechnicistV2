const router = require("express").Router();
const hasAuthorization = require("../utils/authorize");

router.get("/", hasAuthorization, async (req, res) => {});

router.post("/", hasAuthorization, async (req, res) => {});