# πBoard With Password Service
> λ μ¨ APIλ₯Ό ν¬ν¨ν ν¨μ€μλ μ€μ λ κ²μν μλΉμ€ 
</br>

```
# νλ‘μ νΈ μ€ν
$ yarn run start:dev

# Swagger
localhost:3000/api-docs
```  
</br>

## πκ°λ° κΈ°κ°
2022.09.06 ~ 2022.09.07  
</br></br>

## βοΈκΈ°μ  μ€ν
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)  
</br>
**ORM: TypeORM**  
</br></br>

## βοΈμκ΅¬μ¬ν­ λ° λΆμ
### **μκ΅¬μ¬ν­**
#### 1. μ¬μ©μλ κ²μκΈμ μ¬λ¦΄ μ μλ€. (Issues #1)
   * κ²μκΈμ μ λͺ©, λ³Έλ¬Έ, λΉλ°λ²νΈλ‘ κ΅¬μ±
   * μ λͺ©μ μ΅λ 20μ, λ³Έλ¬Έμ 200μλ‘ μλ²μμ μ ν
   * μ λͺ©κ³Ό λ³Έλ¬Έ λͺ¨λ μ΄λͺ¨μ§κ° ν¬ν¨λ  μ μμ  
   </br>
   
#### 2. μ¬μ©μλ κ²μκΈμ μ¬λ¦΄ λ λΉλ°λ²νΈλ₯Ό μ€μ ν  μ μλ€. (Issues #2)
   * νμκ°μ, λ‘κ·ΈμΈ μμ΄ λΉλ°λ²νΈλ§ μΌμΉνλ©΄ μμ , μ­μ κ° κ°λ₯
   * λΉλ°λ²νΈλ DBμ μνΈν λ ννλ‘ μ μ₯
   * λΉλ°λ²νΈλ 6μ μ΄μ, μ«μ 1κ° μ΄μ λ°λμ ν¬ν¨  
   </br>
   
#### 3. λͺ¨λ  μ¬μ©μλ ν νμ΄μ§ λ΄μμ λͺ¨λ  κ²μκΈμ μ΅μ  κΈ μμλ‘ νμΈ ν  μ μλ€. (Issues #2)  
</br>

### **μΆκ° μκ΅¬μ¬ν­**
#### 1. κ²μκΈμ κ°μκ° λ§μ λ, μ¬μ©μκ° μ€ν¬λ‘€μ λ΄λ¦΄ λλ§λ€ μ€λλ κΈλ€μ΄ κ³μ λ‘λλκ² API μμ νλ€. (Issues #3)
   * κ²μκΈ μ€λ³΅ λΆκ°
   * μΆκ° λ‘λλ 20κ° λ¨μ  
   </br>
   
#### 2. μΈλΆ APIλ₯Ό νμ©νμ¬, μ¬μ©μκ° κ²μκΈμ μλ‘λν μμ μ λ μ¨ μ λ³΄κ° κ²μκΈμ ν¬ν¨λλλ‘ μμ νλ€. (Issues #4)
   * https://www.weatherapi.com κ°μ ν Real-time Weather API μ¬μ©
   * λ°κΈ λ°μ API Keyλ .env νμΌμ μ μ₯
   * κ²μκΈ μμ± μ μλμΌλ‘ λ°μ΄ν°λ² μ΄μ€μ μΆκ°
   * μμ μ λΆκ°  
   </br></br>
   
## π§©ERD
![image](https://user-images.githubusercontent.com/33679560/188898930-6f829c58-b2f6-4c3d-b53c-590c8c822069.png)  
</br></br>

## πAPI λͺμΈμ
![image](https://user-images.githubusercontent.com/33679560/188870735-e21400b1-3ae1-47f7-8897-1161366911b6.png)  
</br>
### [postman λ°λ‘κ°κΈ°](https://documenter.getpostman.com/view/21326072/VVBTV7hE)  
</br>

### Response μ)
* success: true μΈ κ²½μ°
```
{
    "success": true,
    "statusCode": 200,
    "data": {
        "id": "5fe83de0-9047-44a3-800a-11f25b2b32ce",
        "title": "μμ λ κ²μκΈμλλ€.",
        "content": "μ€λ λ μ¨λ?π€",
        "password": "$2b$10$aY9iX1C2mu8axioYqHuB6O8FAn9saMbcuc2LkDcqN7bikBnyMnfsm",
        "weather": "νμ°½ν¨",
        "createdAt": "2022-09-07T14:43:07.254Z",
        "updateAt": "2022-09-07T14:45:59.000Z",
        "deleteAt": null
    },
    "message": "κ²μκΈμ΄ μμ λμμ΅λλ€.",
    "timestamp": "2022-09-07T14:45:59.116Z"
}
```   
* success: false μΈ κ²½μ°
```
{
    "success": false,
    "statusCode": 400,
    "message": "λΉλ°λ²νΈκ° λ§μ§ μμ΅λλ€.",
    "timestamp": "2022-09-07T14:45:37.793Z"
}
```   
</br></br>

## πConvention
### Git Branch
* ``main``, ``develop``, ``feat``λ‘ λΈλμΉλ₯Ό λλλ€.
* κΈ°λ₯λ³λ‘ ``feat/user``, ``feat/board`` λ±μΌλ‘ κ΅¬λΆ μ§λλ€.
* λΈλμΉλ μ­μ νμ§ μλλ€.
* κ°λ° κ³Όμ μμλ ``devleop``λΈλμΉμ merge νλ€.
* ``mian``λΈλμΉλ λ°°ν¬νκΈ° μ μ merge νλ€.  
</br>

### Git Commit
* ``feat`` : μλ‘μ΄ κΈ°λ₯ μΆκ° / κ΅¬νμ€
* ``fix`` : μ΄λ―Έ μλ μ½λλ₯Ό μμ  / λ²κ·Έ μμ 
* ``refactor`` : μ½λ λ¦¬ν©ν λ§
* ``docs`` : λ¬Έμ μμ (README, Swagger)
* ``test`` : νμ€νΈ μ½λ
* ``chore`` : κ°λ°μ μν₯μ κ°μ§ μλ λΆλΆ μμ (ν¨ν€μ§ λ§€λμ , μ£Όμ)  
</br>

**example)**
```
git commit -m "feat: κ²μν Create API κ°λ° (μ΄μλ²νΈ)"
git commit -m "fix: κ²μν Update μΌλΆ μμ  (μ΄μλ²νΈ)"
git commit -m "chore: μ£Όμ μΆκ°"
```  
</br>

