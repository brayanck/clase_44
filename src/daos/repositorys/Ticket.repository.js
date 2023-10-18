class TicketRepository {
    constructor(dao){
        this.dao = dao;
    }
    saveTiket = async (Data) => {
        try {
            return await this.dao.saveTiket(Data);
        } catch (err) {
            console.log(err);
            return null;
        }
    };
}
module.exports = TicketRepository;