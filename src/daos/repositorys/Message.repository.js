class MessageRepository {
    constructor(dao){
        this.dao = dao;
    }
    getAllMessages = async()=>{
        
        try {
            return await this.dao.getAllMessages()
        } catch (err) {
            console.log(err);
            return null;
        }
    }
    createMessage = async (objeto) => {
        try {
          let newMsg = await this.dao.createMessage(objeto)
        } catch (err) {
          console.log(err);
          return null;
        }
      };
    
}
module.exports = MessageRepository