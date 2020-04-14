class cyUtils{
    /**
     * 判读字符串是否是yyyy-mm-dd格式
     * @param {string} date 验证的值
     */
    inspectionTime(date){
        const testTime = /^(\d{4})(-)(\d{2})(-)(\d{2})$/;
        if(testTime.test(date)){
          return true;
        }else{
          return false;
        }
    }

    /**
     * 删除对象里值为空的键
     * @param {obj} data 
     */
    deleteValueIsNull(data){
      for(let i in data){
        if(data[i]==null||data[i]==''||data[i]==undefined){
          delete data[i];
        }
      }
      return data;
    }
}

export default cyUtils