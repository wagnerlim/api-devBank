export type documentType = "CPF" | "CNPJ" | "Other";
export type departament =
  | "Technology"
  | "Communication"
  | "Financial"
  | "Management";
export type phone = {
  countryCode: string;
  areaCode: string;
  number: string;
};
