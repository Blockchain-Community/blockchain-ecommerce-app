const { connect } = require('mongoose');
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://sangya2001:blockchain-ecommerce-app@cluster0.9mo8i.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const paymentSchema = new mongoose.Schema({
    id: String,
    itemId: String,
    paid: Boolean
})

module.exports = Payment = mongoose.model('payment', paymentSchema);

