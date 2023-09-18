"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../../controllers/inputs/product");
const router = (0, express_1.Router)();
router.post("/", product_1.newProduct);
router.put("/:id", product_1.updateProduct);
router.patch("/enable/:id", product_1.enableProduct);
router.delete("/delete/:id", product_1.deletedProduct);
exports.default = router;
