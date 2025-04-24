class BrrowController {
    constructor(BorrowService) {
        this.BorrowService = BorrowService;
    }
    borrowingBook = async (req, res) => {
    const id = req.user.id;
    const { bookId } = req.params;
    const result = await this.BorrowService.BrrowbookService({userId : id, bookId : bookId});
    if(result.code !== 200) {
        return res.status(result.code).json({
            code : result.code,
            message : result.message,
        })
    } else return res.status(200).json({
        code : 200,
        message : result.message,
    })

}
    returnBook = async (req, res) => {
    const id = req.user.id;
    const { bookId } = req.params;

    const result = await this.BorrowService.ReturnbookService({userId : id, bookId : bookId});
    if(result.code !== 200) {
        return res.status(result.code).json({
            code : result.code,
            message : result.message,
        })
    } else return res.status(200).json({
        code : 200,
        message : result.message,
    })

}
}

module.exports = BrrowController;