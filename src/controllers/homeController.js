const connection = require('../config/database');
const { getAllUsers, getUserById, updateUserById, deleteUserById, getAllNV, getAllSP } = require('../services/CRUDservices')

const getHomepage = async (req, res) => {
    //let results = await getAllUsers();
    return res.render('home.ejs')
}

const getNV = async (req, res) => {
    let results = await getAllNV();
    return res.render('nhanvien.ejs', { listNhanVien: results })
}

const getSP = async (req, res) => {
    let results = await getAllSP();
    return res.render('sanpham.ejs', { listSanPham: results })
}

const getKH = async (req, res) => {
    let results = await getAllUsers();
    return res.render('khachhang.ejs', { listKhachHang: results })
}

const postCreateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city

    console.log('email=', email, ' name = ', name, ' city= ', city)

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUE(?, ?, ?)`,
        [email, name, city],
    );
    res.send('Create user succeed');
}
const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId)
    res.render('edit.ejs', { userEdit: user })// x <- y
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city
    let userId = req.body.userId

    await updateUserById(email, city, name, userId);

    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId)
    res.render('delete.ejs', { userEdit: user })
}

const postHandlRemoveUser = async (req, res) => {
    const id = req.body.userId;
    await deleteUserById(id)
    res.redirect('/')
}

module.exports = {
    getHomepage, getNV, getSP, getKH, postCreateUser, getCreatePage, getUpdatePage,
    postUpdateUser, postDeleteUser, postHandlRemoveUser
}