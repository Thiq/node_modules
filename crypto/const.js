exports.constants = {
    // OpenSSL Options
    SSL_OP_ALL: 0,
    SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 1,
    SSL_OP_CIPHER_SERVER_PREFERENCE: 2,
    SSL_OP_CISCO_ANYCONNECT: 3,
    SSL_OP_COOKIE_EXCHANGE: 4,
    SSL_OP_CRYPTOPRO_TLSEXT_BUG: 5,
    SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 6,
    SSL_OP_EPHEMERAL_RSA: 7,
    SSL_OP_LEGACY_SERVER_CONNECT: 8,
    SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 9,
    SSL_OP_MICROSOFT_SESS_ID_BUG: 10,
    SSL_OP_MSIE_SSLV2_RSA_PADDING: 11,
    SSL_OP_NETSCAPE_CA_DN_BUG: 12,
    SSL_OP_NETSCAPE_CHALLENGE_BUG: 13,
    SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 14,
    SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 15,
    SSL_OP_NO_COMPRESSION: 16,
    SSL_OP_NO_QUERY_MTU: 17,
    SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 18,
    SSL_OP_NO_SSLv2: 19,
    SSL_OP_NO_SSLv3: 20,
    SSL_OP_NO_TICKET: 21,
    SSL_OP_NO_TLSv1: 22,
    SSL_OP_NO_TLSv1_1: 23,
    SSL_OP_NO_TLSv1_2: 24,
    SSL_OP_PKCS1_CHECK_1: 25,
    SSL_OP_PKCS1_CHECK_2: 26,
    SSL_OP_SINGLE_DH_USE: 27,
    SSL_OP_SINGLE_ECDH_USE: 28,
    // OpenSSL Engine Constants
    ENGINE_METHOD_RSA: 40,
    ENGINE_METHOD_DSA: 41,
    ENGINE_METHOD_DH: 42,
    ENGINE_METHOD_RAND: 43,
    ENGINE_METHOD_ECDH: 44,
    ENGINE_METHOD_ECDSA: 45,
    ENGINE_METHOD_CIPHERS: 46,
    ENGINE_METHOD_DIGESTS: 47,
    ENGINE_METHOD_STORE: 48,
    ENGINE_METHOD_PKEY_METHS: 49,
    ENGINE_METHOD_PKEY_ASN1_METHS: 50,
    ENGINE_METHOD_ALL: 58,
    ENGINE_METHOD_NONE: 59,
    // Other OpenSSL Constants
    DH_CHECK_P_NOT_SAFE_PRIME: 60,
    DH_CHECK_P_NOT_PRIME: 61,
    DH_UNABLE_TO_CHECK_GENERATOR: 62,
    DH_NOT_SUITABLE_GENERATOR: 63,
    NPN_ENABLED: 64,
    ALPN_ENABLED: 65,
    RSA_PKCS1_PADDING: 66,
    RSA_SSLV23_PADDING: 67,
    RSA_NO_PADDING: 68,
    RSA_PKCS1_OAEP_PADDING: 69,
    RSA_X931_PADDING: 70,
    RSA_PSS_SALTLEN_DIGEST: 71,
    RSA_PSS_SALTLEN_MAX_SIGN: 72,
    RSA_PSS_SALTLEN_AUTO: 73,
    POINT_CONVERSION_COMPRESSED: 74,
    POINT_CONVERSION_UNCOMPRESSED: 75,
    POINT_CONVERSION_HYBRID: 76,
    // NodeJS constants
    defaultCoreCipherList: 90,
    defaultCipherList: 91
}

exports.DEFAULT_ENCODING = 'buffer';

exports.fips = false;
