export interface IRecycle {
  id: string;
  name: string;
}

export interface IGetRecycleResponse {
  data: IRecycle[];
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
