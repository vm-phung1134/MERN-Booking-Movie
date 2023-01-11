const mongoose = require('mongoose')
const reservationSchema = new mongoose.Schema({
    quantity: { // Số lượng người đặt
        type: Number,
        required: [true, 'Quantity must be required']
    },
    date: { // Ngày đặt vé
        type: String,
        required: [true, 'Date reservation must be required']
    },
    seats: [{ // Array chỗ ngồi đã đặt
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seat'
    }],
    movieId:{ // Thông tin phim
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    },
    comboFoodId: { // Đồ ăn theo combo
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ComboFood'
    },
    cinemaId: { // Lấy giờ chiếu - ngày chiếu - rạp chiếu
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cinema'
    },
    author: { // Thông tin người đặt
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    total: { // Gía vé + comboFood + Số lượng người = Tổng thanh toán
        type: Number,
        required: [true, 'Total price must be required']
    },
    price: { // Giá vé
        type: Number,
        required: [true, 'Price reservation must be required']
    },
    checkout: { // Kiểm tra thanh toán
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const Reservation = mongoose.model('Reservation', reservationSchema)
module.exports  = Reservation