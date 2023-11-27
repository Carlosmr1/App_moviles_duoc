import { inject, Injectable } from '@angular/core';
import { Configuration, EmailsApi, EmailTransactionalMessageData ,TemplatesApi } from '@elasticemail/elasticemail-client-ts-axios';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class PasswordRecoveryService {

//   private apiUrl = 'https://radiant-everglades-84177-c650c4e24caa.herokuapp.com/enviar-correo'; // Cambia esto por la URL de tu aplicación Heroku

//   constructor(private http: HttpClient) {}

//   enviarCorreo(destinatario: string, asunto: string, cuerpo: string) {
//     const data = { destinatario, asunto, cuerpo };
//     return this.http.post(this.apiUrl, data);
//   }

// }



@Injectable({
  providedIn: 'root'
})
export class PasswordRecoveryService {

 http = inject(HttpClient);
  


  config = new Configuration({
    apiKey: "ED8D9AB1C391583A3CD08494C09E1709294757B96B2F92591A1A228EAF732243DCC5663EA95832B99154FC045915CBC8"
  });

  emailsApi = new EmailsApi(this.config);

  templatesApi = new TemplatesApi(this.config);

  templateName = "Plantilla 1";

  loadTemplate = async (): Promise<any | undefined> => {
    try{
      const response = await this.templatesApi.templatesByNameGet(this.templateName);
      console.log('API called successfully.');
      const templateBody = response.data.Body;
      console.log(templateBody);
      return templateBody;
    }catch(error){
      console.log("error unu");
      return undefined;

    }
  } 

   sendEmail = async (correo:any): Promise<void> => {


    const body = await this.loadTemplate();
    console.log(body[0]);
    console.log(body[0].ContentType);
    console.log(body[0].Charset);
    console.log(body[0].Content);

    const emailTransactionalMessageData:EmailTransactionalMessageData = {
      Recipients: { 
        To: [correo] 
      },
      Content: {
        Body: [{
          ContentType: body[0].ContentType,
          Charset: body[0].Charset,
          Content: body[0].Content
        }],
        From: "duoconwheels@gmail.com",
        Subject: "Bienvenido a Duoc On Wheels"
      }
    };
    this.emailsApi.emailsTransactionalPost(emailTransactionalMessageData).then((response) => {
      console.log('API called successfully.');
      console.log(response.data);
    }).catch((error) => {
      console.error(error);
    });

  }
}