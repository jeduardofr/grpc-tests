// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var packages_with$protocat_proto_auth_pb = require('../../../packages/with-protocat/proto/auth_pb.js');

function serialize_auth_v1_AuthRequest(arg) {
  if (!(arg instanceof packages_with$protocat_proto_auth_pb.AuthRequest)) {
    throw new Error('Expected argument of type auth.v1.AuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_v1_AuthRequest(buffer_arg) {
  return packages_with$protocat_proto_auth_pb.AuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_v1_AuthResponse(arg) {
  if (!(arg instanceof packages_with$protocat_proto_auth_pb.AuthResponse)) {
    throw new Error('Expected argument of type auth.v1.AuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_v1_AuthResponse(buffer_arg) {
  return packages_with$protocat_proto_auth_pb.AuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  login: {
    path: '/auth.v1.AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: packages_with$protocat_proto_auth_pb.AuthRequest,
    responseType: packages_with$protocat_proto_auth_pb.AuthResponse,
    requestSerialize: serialize_auth_v1_AuthRequest,
    requestDeserialize: deserialize_auth_v1_AuthRequest,
    responseSerialize: serialize_auth_v1_AuthResponse,
    responseDeserialize: deserialize_auth_v1_AuthResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
