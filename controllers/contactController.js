//this helps us not to use async await as its going to catch all the exceptions
const asyncHandler = require('express-async-handler')

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts =asyncHandler(async(req,res)=>{
    res.status(200).json({"message":"Get all contacts"})
}) 
//@desc  create new contacts
//@route POST /api/contacts
//@access public

const createContact =asyncHandler(async(req,res)=>{
    console.log("The body is", req.body)
    const {name,email,phone}= req.body;
    if(!name || !email || !phone){
        res.sendStatus(400);
        //this error handler is not enough, we need to create a custom error handler
        throw new Error("All Fields are mandatory")
    }
    res.status(201).json({"message":"Create contacts"})
})

//@desc Get all contacts
//@route PUT /api/contacts/:id
//@access public

const getContact =asyncHandler(async(req,res)=>{
    res.status(200).json({"message":`Get contact for ${req.params.id}`})
})

//@desc Get one contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact =asyncHandler(async(req,res)=>{
    res.status(200).json({"message":`Update contact for ${req.params.id}`})
})
//@desc delete a contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContact =asyncHandler(async(req,res)=>{
    res.status(200).json({"message":`Delete contact for ${req.params.id}`})
})

module.exports = {getContacts,createContact,getContact,updateContact,deleteContact}