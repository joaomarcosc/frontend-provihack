export interface IRecycle {
  id: string;
  name: string;
}

export interface IGetRecycleResponse {
  data: IRecycle[];
}

export interface IGetEstablishment {
  id: string;
  name: string;
  state: string;
  city: string;
  adress: string;
  cep: string;
  tel: string;
  workingTime: string;
  discart: string[];
  howToDiscart: string;
  howDoesDiscart: string;
}

export interface IGetEstablishmentResponse {
  data: IGetEstablishment;
}

export interface IGetDiscard {
  nameEstablishment: string;
  tel: string;
  state: string;
  city: string;
  cep: string;
  nameResponsive: string;
  email: string;
}

export interface IGetDiscardResponse {
  data: IGetDiscard[];
}

export interface IPostSuggestionParams {
  nameEstablishment: string;
  tel: string;
  state: string;
  city: string;
  cep: string;
  nameResponsive: string;
  email: string;
}

export interface IPostFormSupportParams {
  name: string;
  subject: string;
  email: string;
  message: string;
}
