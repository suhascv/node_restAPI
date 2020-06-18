import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel'

const Contact = mongoose.model('Contact',ContactSchema)

export const addNewContact = (req,res)=>{
    let newContact = new Contact(req.body);

    newContact.save((err,contact)=>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    })
};

export const getContacts = (req,res)=>{
    Contact.find({},{lastName:1,firstName:1},(err,contact)=>{
        if(err){
            res.send(err);
        }
        res.json(contact)
    })
};

export const getContactWithID = (req,res)=>{
    Contact.find({_id:req.params.contactID},(err,contact)=>{
        if(err){
            res.send(err);
        }
        res.json(contact)
    })
};

export const deleteContactWithID = (req,res)=>{
    Contact.deleteOne({_id:req.params.contactID},(err,contact)=>{
        if(err)
            res.send(err)
        res.json(contact)
    });
};

export const updateContact = (req,res)=>{
    Contact.findOneAndUpdate({_id:req.params.contactID},req.body,{new:true,useFindAndModify:false},
        (err,contact)=>{
            if(err)
            res.send(err)
        res.json(contact)
        }
        )
}


