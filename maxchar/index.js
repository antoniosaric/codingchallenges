// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

        var temp_obj = {};
        highest_char = '';
        highest_char_count = 0;

        for( var i = 0; i < str.length; i++ ){
            !!temp_obj.hasOwnProperty(temp_obj[str[i]]) && str[i] !== undefined ? temp_obj[str[i]] = temp_obj[str[i]]++ : temp_obj[str[i]] = 1;

            if( temp_obj[str[i]] >= highest_char_count ){
                highest_char_count = temp_obj[str[i]];
                highest_char = str[i];
            }
        }

        return highest_char;

}

module.exports = maxChar;
