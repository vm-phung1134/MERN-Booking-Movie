const Ticket = require('../models/Ticket.Model.js')

exports.getAllTickets = async (req, res, next) => {
    try {
        const tickets = await Ticket.find({}).populate('author')
        res.status(200).json({
            status: 'success',
            results: tickets.length,
            data: {tickets}
        })
    } catch (error) {
        res.json(error)
    }
}

exports.createTicket = async (req, res, next) => {
    try {
        const {userId} = req.user;
        const ticket = await Ticket.create({...req.body, author: userId})
        res.status(200).json({
            status: 'success',
            data: {ticket}
        })
    } catch (error) {
        next(error)
    }
}

exports.updateTicket = async (req, res, next) => {
    try {
        const {ticketId} = req.params;
        const ticket = await Ticket.findByIdAndUpdate(ticketId,{...req.body},{new: true, runValidator: true})
        res.status(200).json({
            status: 'success',
            data: {ticket}
        })
    } catch (error) {
        next(error)
    }
}

exports.deleteTicket = async (req, res, next) => {
    try {
        const {ticketId} = req.params;
        await Ticket.findByIdAndDelete(ticketId)
        res.status(200).json({
            status: 'success',
            message: 'Ticket has been deleted'
        })
    } catch (error) {
        next(error)
    }
}