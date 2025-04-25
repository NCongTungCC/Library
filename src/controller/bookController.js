class BookController {
    constructor(BookService) {
        this.BookService = BookService;
    }
    getBook = async (req, res) => {
       const result = await this.BookService.getBookService();
       if(result.code !== 200) {
        return res.status(result.code).json({
            code : result.code,
            message : result.message,
            data : result.data,
        })
       } else
        return res.status(200).json({
            code : 200,
            message : result.message,
            data : result.data,
        })
    }

    createBook = async (req, res) => {
        const {tensach, tacgia, namxuatban, mota, soluong, theloai} = req.body;
        const poster = req.file ? req.file.path : '';
        const result = await this.BookService.createBookService({tensach, tacgia, namxuatban, mota, poster, soluong, theloai});
        if(result.code !== 200) {
            return res.status(result.code).json({
                code : result.code,
                message : result.message,
            })
           } else
            return res.status(200).json({
                code : 200,
                message : result.message,
            })
    }
    deleteBook = async (req, res) => {
        const { id } = req.params;
        const result = await this.BookService.deleteBookService({id});
        if(result.code !== 200) {
         return res.status(result.code).json({
             code : result.code,
             message : result.message,
         })
        } else
         return res.status(200).json({
             code : 200,
             message : result.message,
         })
    }
    updateBook = async (req, res) => {
        const {id} = req.params;
        const {tensach, tacgia, namxuatban, mota, soluong, poster, theloai} = req.body;
        const result = await this.BookService.updateBookService({id, tensach, tacgia, namxuatban, mota, poster, soluong, theloai});
        if(result.code !== 200) {
            return res.status(result.code).json({
                code : result.code,
                message : result.message,
            })
           } else
            return res.status(200).json({
                code : 200,
                message : result.message,
                data : result.data,
            })
    }
    searchBook = async (req, res) => {
        const {query} = req.params;

        const result = await this.BookService.updateBookService({ query });
        if(result.code !== 200) {
            return res.status(result.code).json({
                code : result.code,
                message : result.message,
            })
           } else
            return res.status(200).json({
                code : 200,
                message : result.message,
            })
    }
}

module.exports = BookController;