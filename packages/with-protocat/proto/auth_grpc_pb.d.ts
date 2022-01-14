// package: auth.v1
// file: packages/with-protocat/proto/auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as packages_with_protocat_proto_auth_pb from "../../../packages/with-protocat/proto/auth_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IAuthServiceService_ILogin;
}

interface IAuthServiceService_ILogin extends grpc.MethodDefinition<packages_with_protocat_proto_auth_pb.AuthRequest, packages_with_protocat_proto_auth_pb.AuthResponse> {
    path: "/auth.v1.AuthService/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<packages_with_protocat_proto_auth_pb.AuthRequest>;
    requestDeserialize: grpc.deserialize<packages_with_protocat_proto_auth_pb.AuthRequest>;
    responseSerialize: grpc.serialize<packages_with_protocat_proto_auth_pb.AuthResponse>;
    responseDeserialize: grpc.deserialize<packages_with_protocat_proto_auth_pb.AuthResponse>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer extends grpc.UntypedServiceImplementation {
    login: grpc.handleUnaryCall<packages_with_protocat_proto_auth_pb.AuthRequest, packages_with_protocat_proto_auth_pb.AuthResponse>;
}

export interface IAuthServiceClient {
    login(request: packages_with_protocat_proto_auth_pb.AuthRequest, callback: (error: grpc.ServiceError | null, response: packages_with_protocat_proto_auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    login(request: packages_with_protocat_proto_auth_pb.AuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: packages_with_protocat_proto_auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    login(request: packages_with_protocat_proto_auth_pb.AuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: packages_with_protocat_proto_auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public login(request: packages_with_protocat_proto_auth_pb.AuthRequest, callback: (error: grpc.ServiceError | null, response: packages_with_protocat_proto_auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public login(request: packages_with_protocat_proto_auth_pb.AuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: packages_with_protocat_proto_auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public login(request: packages_with_protocat_proto_auth_pb.AuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: packages_with_protocat_proto_auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
}
