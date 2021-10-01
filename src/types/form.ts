export type DecryptFormOrNull = DecryptForm | null;

export type EncryptForm = {
  pubServerId: string;
  targetServerId: string;
  privateObj: object;
}

export type DecryptForm = {
  pubServerId: string;
  targetServerId: string;
  privateObj: object;
  code: number;
}