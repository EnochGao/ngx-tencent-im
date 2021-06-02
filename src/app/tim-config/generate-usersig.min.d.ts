declare function LibGenerateTestUserSig(SDKAPPID: number, SECRETKEY: string, EXPIRETIME: number): void;

declare namespace LibGenerateTestUserSig {
  function genTestUserSig(params: string): string;
}

export = LibGenerateTestUserSig;
