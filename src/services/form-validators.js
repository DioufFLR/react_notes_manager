export class ValidatorService {

    static min( value, min ) {
        if (value.length < min) {
            return `Veuillez tapper au moins ${ min } lettres`
        }
    }

    static max( value, max ) {
        if (value.length > max) {
            return `Veuillez tapper un maximum de ${max} lettres`
        }
    }
}