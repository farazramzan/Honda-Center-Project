import express from 'express'
import cors from 'cors'
import db from './config/db.js'
import LoansRoutes from './routes/Loans.js'
import authRoutes from  './routes/auth.js'
import UserRoutes from './routes/UserRoutes.js'
import ProductCrudRoutes from './routes/ProductCrudRoutes.js'
import AvailableProducts from './routes/AvailableProducts.js'
import SaleRoutes from './routes/Sales.js'
import PurchaseRoutes from './routes/PurchasefromSupplier.js'

import SupplierRoutes from './routes/SupplierOrder.js'
import expenseRoutes from './routes/Expenses.js'
import admindashboardroutes from './routes/AdminDashboard.js'
import returnproductroutes from './routes/Return.js'
import cashloans from './routes/CashLoan.js'
import ReportsRoutes from './routes/Reports.js'
import adminUpdateRoute from './routes/admin.js'

const app=express()
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }));


app.use('/auth',authRoutes)
app.use('/User',UserRoutes)
app.use('/Sales',SaleRoutes)
app.use('/Products',ProductCrudRoutes)
app.use('/AvailableProducts',AvailableProducts)
app.use('/Loans',LoansRoutes)
app.use('/Supplier',SupplierRoutes)
app.use('/Purchase',PurchaseRoutes)
app.use('/Admin',admindashboardroutes)
app.use('/Return',returnproductroutes)
app.use('/Expenses',expenseRoutes)
app.use('/Reports',ReportsRoutes)
app.use('/CashLoan',cashloans)
app.use('/Admin',adminUpdateRoute)
app.post('/addNewPurchase',(req,res)=>{
          const sql="call Purchase(?);"
    const values=[
        req.body.productid,
        req.body.quantity,

    ]    
    db.query(sql,[values],(err,data)=>{
        if(err) return console.log(err)
          
     
        return res.json("data Create SuccesFully")
    })

})









const PORT = process.env.PORT || 8081;
app.listen(PORT,()=>{
    console.log("Server is Running")
})






// import express from 'express'
// import cors from 'cors'
// import db from './config/db.js'
// import LoansRoutes from './routes/Loans.js'
// import authRoutes from './routes/auth.js'
// import UserRoutes from './routes/UserRoutes.js'
// import ProductCrudRoutes from './routes/ProductCrudRoutes.js'
// import AvailableProducts from './routes/AvailableProducts.js'
// import SaleRoutes from './routes/Sales.js'
// import PurchaseRoutes from './routes/PurchasefromSupplier.js'
// import SupplierRoutes from './routes/SupplierOrder.js'
// import expenseRoutes from './routes/Expenses.js'
// import admindashboardroutes from './routes/AdminDashboard.js'
// import returnproductroutes from './routes/Return.js'
// import cashloans from './routes/CashLoan.js'
// import ReportsRoutes from './routes/Reports.js'
// import adminUpdateRoute from './routes/admin.js'

// const app = express()

// const allowedOrigins = (process.env.FRONTEND_URL || '')
//   .split(',')
//   .map((o) => o.trim())
//   .filter(Boolean)

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       // allow requests with no origin (Postman, server-to-server) and local dev
//       if (!origin || origin.startsWith('http://localhost') || allowedOrigins.includes(origin)) {
//         return callback(null, true)
//       }
//       return callback(new Error('Not allowed by CORS'))
//     },
//     credentials: true,
//   })
// )
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// app.get('/health', (req, res) => res.json({ status: 'ok' }))

// app.use('/auth', authRoutes)
// app.use('/User', UserRoutes)
// app.use('/Sales', SaleRoutes)
// app.use('/Products', ProductCrudRoutes)
// app.use('/AvailableProducts', AvailableProducts)
// app.use('/Loans', LoansRoutes)
// app.use('/Supplier', SupplierRoutes)
// app.use('/Purchase', PurchaseRoutes)
// app.use('/Admin', admindashboardroutes)
// app.use('/Admin', adminUpdateRoute)
// app.use('/Return', returnproductroutes)
// app.use('/Expenses', expenseRoutes)
// app.use('/Reports', ReportsRoutes)
// app.use('/CashLoan', cashloans)

// app.post('/addNewPurchase', async (req, res) => {
//   const { productid, quantity } = req.body

//   if (!productid || !quantity) {
//     return res.status(400).json({ message: 'productid and quantity are required' })
//   }

//   try {
//     await db.query('CALL Purchase(?, ?);', [productid, quantity])
//     return res.json('data Create SuccesFully')
//   } catch (err) {
//     console.error(err)
//     return res.status(500).json({ message: 'Failed to add purchase' })
//   }
// })

// // global error handler (catches CORS errors and anything thrown in routes)
// app.use((err, req, res, next) => {
//   console.error(err)
//   res.status(500).json({ message: err.message || 'Server error' })
// })

// const PORT = process.env.PORT || 8081
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`)
// })