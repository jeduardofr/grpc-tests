// package: auth.v1
// file: packages/vanilla/proto/auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Credentials extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): Credentials;
    getPassword(): string;
    setPassword(value: string): Credentials;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Credentials.AsObject;
    static toObject(includeInstance: boolean, msg: Credentials): Credentials.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Credentials, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Credentials;
    static deserializeBinaryFromReader(message: Credentials, reader: jspb.BinaryReader): Credentials;
}

export namespace Credentials {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class AuthRequest extends jspb.Message { 

    hasCredentials(): boolean;
    clearCredentials(): void;
    getCredentials(): Credentials | undefined;
    setCredentials(value?: Credentials): AuthRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthRequest): AuthRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthRequest;
    static deserializeBinaryFromReader(message: AuthRequest, reader: jspb.BinaryReader): AuthRequest;
}

export namespace AuthRequest {
    export type AsObject = {
        credentials?: Credentials.AsObject,
    }
}

export class AuthResponse extends jspb.Message { 
    getToken(): string;
    setToken(value: string): AuthResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AuthResponse): AuthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthResponse;
    static deserializeBinaryFromReader(message: AuthResponse, reader: jspb.BinaryReader): AuthResponse;
}

export namespace AuthResponse {
    export type AsObject = {
        token: string,
    }
}
