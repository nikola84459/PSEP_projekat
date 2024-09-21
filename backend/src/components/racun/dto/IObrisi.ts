import Ajv from "ajv";

interface IObrisi {
    racunId: number;
    
}

const ajv = new Ajv();

const IObrisiValidator = ajv.compile({
    type: "object",
    properties: {
        racunId: {
            type: "integer",
        }
    },

    required: [
        "racunId",
    ],

    additionalProperties: false,
});

export {IObrisi};
export {IObrisiValidator};