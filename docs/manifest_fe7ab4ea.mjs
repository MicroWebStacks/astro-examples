import './chunks/astro_be502106.mjs';

if (typeof process !== 'undefined') {
	(process.env || {});
	process.stdout && process.stdout.isTTY;
}

var eastasianwidth = {exports: {}};

(function (module) {
	var eaw = {};

	{
	  module.exports = eaw;
	}

	eaw.eastAsianWidth = function(character) {
	  var x = character.charCodeAt(0);
	  var y = (character.length == 2) ? character.charCodeAt(1) : 0;
	  var codePoint = x;
	  if ((0xD800 <= x && x <= 0xDBFF) && (0xDC00 <= y && y <= 0xDFFF)) {
	    x &= 0x3FF;
	    y &= 0x3FF;
	    codePoint = (x << 10) | y;
	    codePoint += 0x10000;
	  }

	  if ((0x3000 == codePoint) ||
	      (0xFF01 <= codePoint && codePoint <= 0xFF60) ||
	      (0xFFE0 <= codePoint && codePoint <= 0xFFE6)) {
	    return 'F';
	  }
	  if ((0x20A9 == codePoint) ||
	      (0xFF61 <= codePoint && codePoint <= 0xFFBE) ||
	      (0xFFC2 <= codePoint && codePoint <= 0xFFC7) ||
	      (0xFFCA <= codePoint && codePoint <= 0xFFCF) ||
	      (0xFFD2 <= codePoint && codePoint <= 0xFFD7) ||
	      (0xFFDA <= codePoint && codePoint <= 0xFFDC) ||
	      (0xFFE8 <= codePoint && codePoint <= 0xFFEE)) {
	    return 'H';
	  }
	  if ((0x1100 <= codePoint && codePoint <= 0x115F) ||
	      (0x11A3 <= codePoint && codePoint <= 0x11A7) ||
	      (0x11FA <= codePoint && codePoint <= 0x11FF) ||
	      (0x2329 <= codePoint && codePoint <= 0x232A) ||
	      (0x2E80 <= codePoint && codePoint <= 0x2E99) ||
	      (0x2E9B <= codePoint && codePoint <= 0x2EF3) ||
	      (0x2F00 <= codePoint && codePoint <= 0x2FD5) ||
	      (0x2FF0 <= codePoint && codePoint <= 0x2FFB) ||
	      (0x3001 <= codePoint && codePoint <= 0x303E) ||
	      (0x3041 <= codePoint && codePoint <= 0x3096) ||
	      (0x3099 <= codePoint && codePoint <= 0x30FF) ||
	      (0x3105 <= codePoint && codePoint <= 0x312D) ||
	      (0x3131 <= codePoint && codePoint <= 0x318E) ||
	      (0x3190 <= codePoint && codePoint <= 0x31BA) ||
	      (0x31C0 <= codePoint && codePoint <= 0x31E3) ||
	      (0x31F0 <= codePoint && codePoint <= 0x321E) ||
	      (0x3220 <= codePoint && codePoint <= 0x3247) ||
	      (0x3250 <= codePoint && codePoint <= 0x32FE) ||
	      (0x3300 <= codePoint && codePoint <= 0x4DBF) ||
	      (0x4E00 <= codePoint && codePoint <= 0xA48C) ||
	      (0xA490 <= codePoint && codePoint <= 0xA4C6) ||
	      (0xA960 <= codePoint && codePoint <= 0xA97C) ||
	      (0xAC00 <= codePoint && codePoint <= 0xD7A3) ||
	      (0xD7B0 <= codePoint && codePoint <= 0xD7C6) ||
	      (0xD7CB <= codePoint && codePoint <= 0xD7FB) ||
	      (0xF900 <= codePoint && codePoint <= 0xFAFF) ||
	      (0xFE10 <= codePoint && codePoint <= 0xFE19) ||
	      (0xFE30 <= codePoint && codePoint <= 0xFE52) ||
	      (0xFE54 <= codePoint && codePoint <= 0xFE66) ||
	      (0xFE68 <= codePoint && codePoint <= 0xFE6B) ||
	      (0x1B000 <= codePoint && codePoint <= 0x1B001) ||
	      (0x1F200 <= codePoint && codePoint <= 0x1F202) ||
	      (0x1F210 <= codePoint && codePoint <= 0x1F23A) ||
	      (0x1F240 <= codePoint && codePoint <= 0x1F248) ||
	      (0x1F250 <= codePoint && codePoint <= 0x1F251) ||
	      (0x20000 <= codePoint && codePoint <= 0x2F73F) ||
	      (0x2B740 <= codePoint && codePoint <= 0x2FFFD) ||
	      (0x30000 <= codePoint && codePoint <= 0x3FFFD)) {
	    return 'W';
	  }
	  if ((0x0020 <= codePoint && codePoint <= 0x007E) ||
	      (0x00A2 <= codePoint && codePoint <= 0x00A3) ||
	      (0x00A5 <= codePoint && codePoint <= 0x00A6) ||
	      (0x00AC == codePoint) ||
	      (0x00AF == codePoint) ||
	      (0x27E6 <= codePoint && codePoint <= 0x27ED) ||
	      (0x2985 <= codePoint && codePoint <= 0x2986)) {
	    return 'Na';
	  }
	  if ((0x00A1 == codePoint) ||
	      (0x00A4 == codePoint) ||
	      (0x00A7 <= codePoint && codePoint <= 0x00A8) ||
	      (0x00AA == codePoint) ||
	      (0x00AD <= codePoint && codePoint <= 0x00AE) ||
	      (0x00B0 <= codePoint && codePoint <= 0x00B4) ||
	      (0x00B6 <= codePoint && codePoint <= 0x00BA) ||
	      (0x00BC <= codePoint && codePoint <= 0x00BF) ||
	      (0x00C6 == codePoint) ||
	      (0x00D0 == codePoint) ||
	      (0x00D7 <= codePoint && codePoint <= 0x00D8) ||
	      (0x00DE <= codePoint && codePoint <= 0x00E1) ||
	      (0x00E6 == codePoint) ||
	      (0x00E8 <= codePoint && codePoint <= 0x00EA) ||
	      (0x00EC <= codePoint && codePoint <= 0x00ED) ||
	      (0x00F0 == codePoint) ||
	      (0x00F2 <= codePoint && codePoint <= 0x00F3) ||
	      (0x00F7 <= codePoint && codePoint <= 0x00FA) ||
	      (0x00FC == codePoint) ||
	      (0x00FE == codePoint) ||
	      (0x0101 == codePoint) ||
	      (0x0111 == codePoint) ||
	      (0x0113 == codePoint) ||
	      (0x011B == codePoint) ||
	      (0x0126 <= codePoint && codePoint <= 0x0127) ||
	      (0x012B == codePoint) ||
	      (0x0131 <= codePoint && codePoint <= 0x0133) ||
	      (0x0138 == codePoint) ||
	      (0x013F <= codePoint && codePoint <= 0x0142) ||
	      (0x0144 == codePoint) ||
	      (0x0148 <= codePoint && codePoint <= 0x014B) ||
	      (0x014D == codePoint) ||
	      (0x0152 <= codePoint && codePoint <= 0x0153) ||
	      (0x0166 <= codePoint && codePoint <= 0x0167) ||
	      (0x016B == codePoint) ||
	      (0x01CE == codePoint) ||
	      (0x01D0 == codePoint) ||
	      (0x01D2 == codePoint) ||
	      (0x01D4 == codePoint) ||
	      (0x01D6 == codePoint) ||
	      (0x01D8 == codePoint) ||
	      (0x01DA == codePoint) ||
	      (0x01DC == codePoint) ||
	      (0x0251 == codePoint) ||
	      (0x0261 == codePoint) ||
	      (0x02C4 == codePoint) ||
	      (0x02C7 == codePoint) ||
	      (0x02C9 <= codePoint && codePoint <= 0x02CB) ||
	      (0x02CD == codePoint) ||
	      (0x02D0 == codePoint) ||
	      (0x02D8 <= codePoint && codePoint <= 0x02DB) ||
	      (0x02DD == codePoint) ||
	      (0x02DF == codePoint) ||
	      (0x0300 <= codePoint && codePoint <= 0x036F) ||
	      (0x0391 <= codePoint && codePoint <= 0x03A1) ||
	      (0x03A3 <= codePoint && codePoint <= 0x03A9) ||
	      (0x03B1 <= codePoint && codePoint <= 0x03C1) ||
	      (0x03C3 <= codePoint && codePoint <= 0x03C9) ||
	      (0x0401 == codePoint) ||
	      (0x0410 <= codePoint && codePoint <= 0x044F) ||
	      (0x0451 == codePoint) ||
	      (0x2010 == codePoint) ||
	      (0x2013 <= codePoint && codePoint <= 0x2016) ||
	      (0x2018 <= codePoint && codePoint <= 0x2019) ||
	      (0x201C <= codePoint && codePoint <= 0x201D) ||
	      (0x2020 <= codePoint && codePoint <= 0x2022) ||
	      (0x2024 <= codePoint && codePoint <= 0x2027) ||
	      (0x2030 == codePoint) ||
	      (0x2032 <= codePoint && codePoint <= 0x2033) ||
	      (0x2035 == codePoint) ||
	      (0x203B == codePoint) ||
	      (0x203E == codePoint) ||
	      (0x2074 == codePoint) ||
	      (0x207F == codePoint) ||
	      (0x2081 <= codePoint && codePoint <= 0x2084) ||
	      (0x20AC == codePoint) ||
	      (0x2103 == codePoint) ||
	      (0x2105 == codePoint) ||
	      (0x2109 == codePoint) ||
	      (0x2113 == codePoint) ||
	      (0x2116 == codePoint) ||
	      (0x2121 <= codePoint && codePoint <= 0x2122) ||
	      (0x2126 == codePoint) ||
	      (0x212B == codePoint) ||
	      (0x2153 <= codePoint && codePoint <= 0x2154) ||
	      (0x215B <= codePoint && codePoint <= 0x215E) ||
	      (0x2160 <= codePoint && codePoint <= 0x216B) ||
	      (0x2170 <= codePoint && codePoint <= 0x2179) ||
	      (0x2189 == codePoint) ||
	      (0x2190 <= codePoint && codePoint <= 0x2199) ||
	      (0x21B8 <= codePoint && codePoint <= 0x21B9) ||
	      (0x21D2 == codePoint) ||
	      (0x21D4 == codePoint) ||
	      (0x21E7 == codePoint) ||
	      (0x2200 == codePoint) ||
	      (0x2202 <= codePoint && codePoint <= 0x2203) ||
	      (0x2207 <= codePoint && codePoint <= 0x2208) ||
	      (0x220B == codePoint) ||
	      (0x220F == codePoint) ||
	      (0x2211 == codePoint) ||
	      (0x2215 == codePoint) ||
	      (0x221A == codePoint) ||
	      (0x221D <= codePoint && codePoint <= 0x2220) ||
	      (0x2223 == codePoint) ||
	      (0x2225 == codePoint) ||
	      (0x2227 <= codePoint && codePoint <= 0x222C) ||
	      (0x222E == codePoint) ||
	      (0x2234 <= codePoint && codePoint <= 0x2237) ||
	      (0x223C <= codePoint && codePoint <= 0x223D) ||
	      (0x2248 == codePoint) ||
	      (0x224C == codePoint) ||
	      (0x2252 == codePoint) ||
	      (0x2260 <= codePoint && codePoint <= 0x2261) ||
	      (0x2264 <= codePoint && codePoint <= 0x2267) ||
	      (0x226A <= codePoint && codePoint <= 0x226B) ||
	      (0x226E <= codePoint && codePoint <= 0x226F) ||
	      (0x2282 <= codePoint && codePoint <= 0x2283) ||
	      (0x2286 <= codePoint && codePoint <= 0x2287) ||
	      (0x2295 == codePoint) ||
	      (0x2299 == codePoint) ||
	      (0x22A5 == codePoint) ||
	      (0x22BF == codePoint) ||
	      (0x2312 == codePoint) ||
	      (0x2460 <= codePoint && codePoint <= 0x24E9) ||
	      (0x24EB <= codePoint && codePoint <= 0x254B) ||
	      (0x2550 <= codePoint && codePoint <= 0x2573) ||
	      (0x2580 <= codePoint && codePoint <= 0x258F) ||
	      (0x2592 <= codePoint && codePoint <= 0x2595) ||
	      (0x25A0 <= codePoint && codePoint <= 0x25A1) ||
	      (0x25A3 <= codePoint && codePoint <= 0x25A9) ||
	      (0x25B2 <= codePoint && codePoint <= 0x25B3) ||
	      (0x25B6 <= codePoint && codePoint <= 0x25B7) ||
	      (0x25BC <= codePoint && codePoint <= 0x25BD) ||
	      (0x25C0 <= codePoint && codePoint <= 0x25C1) ||
	      (0x25C6 <= codePoint && codePoint <= 0x25C8) ||
	      (0x25CB == codePoint) ||
	      (0x25CE <= codePoint && codePoint <= 0x25D1) ||
	      (0x25E2 <= codePoint && codePoint <= 0x25E5) ||
	      (0x25EF == codePoint) ||
	      (0x2605 <= codePoint && codePoint <= 0x2606) ||
	      (0x2609 == codePoint) ||
	      (0x260E <= codePoint && codePoint <= 0x260F) ||
	      (0x2614 <= codePoint && codePoint <= 0x2615) ||
	      (0x261C == codePoint) ||
	      (0x261E == codePoint) ||
	      (0x2640 == codePoint) ||
	      (0x2642 == codePoint) ||
	      (0x2660 <= codePoint && codePoint <= 0x2661) ||
	      (0x2663 <= codePoint && codePoint <= 0x2665) ||
	      (0x2667 <= codePoint && codePoint <= 0x266A) ||
	      (0x266C <= codePoint && codePoint <= 0x266D) ||
	      (0x266F == codePoint) ||
	      (0x269E <= codePoint && codePoint <= 0x269F) ||
	      (0x26BE <= codePoint && codePoint <= 0x26BF) ||
	      (0x26C4 <= codePoint && codePoint <= 0x26CD) ||
	      (0x26CF <= codePoint && codePoint <= 0x26E1) ||
	      (0x26E3 == codePoint) ||
	      (0x26E8 <= codePoint && codePoint <= 0x26FF) ||
	      (0x273D == codePoint) ||
	      (0x2757 == codePoint) ||
	      (0x2776 <= codePoint && codePoint <= 0x277F) ||
	      (0x2B55 <= codePoint && codePoint <= 0x2B59) ||
	      (0x3248 <= codePoint && codePoint <= 0x324F) ||
	      (0xE000 <= codePoint && codePoint <= 0xF8FF) ||
	      (0xFE00 <= codePoint && codePoint <= 0xFE0F) ||
	      (0xFFFD == codePoint) ||
	      (0x1F100 <= codePoint && codePoint <= 0x1F10A) ||
	      (0x1F110 <= codePoint && codePoint <= 0x1F12D) ||
	      (0x1F130 <= codePoint && codePoint <= 0x1F169) ||
	      (0x1F170 <= codePoint && codePoint <= 0x1F19A) ||
	      (0xE0100 <= codePoint && codePoint <= 0xE01EF) ||
	      (0xF0000 <= codePoint && codePoint <= 0xFFFFD) ||
	      (0x100000 <= codePoint && codePoint <= 0x10FFFD)) {
	    return 'A';
	  }

	  return 'N';
	};

	eaw.characterLength = function(character) {
	  var code = this.eastAsianWidth(character);
	  if (code == 'F' || code == 'W' || code == 'A') {
	    return 2;
	  } else {
	    return 1;
	  }
	};

	// Split a string considering surrogate-pairs.
	function stringToArray(string) {
	  return string.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
	}

	eaw.length = function(string) {
	  var characters = stringToArray(string);
	  var len = 0;
	  for (var i = 0; i < characters.length; i++) {
	    len = len + this.characterLength(characters[i]);
	  }
	  return len;
	};

	eaw.slice = function(text, start, end) {
	  textLen = eaw.length(text);
	  start = start ? start : 0;
	  end = end ? end : 1;
	  if (start < 0) {
	      start = textLen + start;
	  }
	  if (end < 0) {
	      end = textLen + end;
	  }
	  var result = '';
	  var eawLen = 0;
	  var chars = stringToArray(text);
	  for (var i = 0; i < chars.length; i++) {
	    var char = chars[i];
	    var charLen = eaw.length(char);
	    if (eawLen >= start - (charLen == 2 ? 1 : 0)) {
	        if (eawLen + charLen <= end) {
	            result += char;
	        } else {
	            break;
	        }
	    }
	    eawLen += charLen;
	  }
	  return result;
	}; 
} (eastasianwidth));

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime$1() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (let i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime$1.prototype.define = function(typeMap, force) {
  for (let type in typeMap) {
    let extensions = typeMap[type].map(function(t) {
      return t.toLowerCase();
    });
    type = type.toLowerCase();

    for (let i = 0; i < extensions.length; i++) {
      const ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] === '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      const ext = extensions[0];
      this._extensions[type] = (ext[0] !== '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime$1.prototype.getType = function(path) {
  path = String(path);
  let last = path.replace(/^.*[/\\]/, '').toLowerCase();
  let ext = last.replace(/^.*\./, '').toLowerCase();

  let hasPath = last.length < path.length;
  let hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime$1.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime$1;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomdeleted+xml":["atomdeleted"],"application/atomsvc+xml":["atomsvc"],"application/atsc-dwd+xml":["dwd"],"application/atsc-held+xml":["held"],"application/atsc-rsat+xml":["rsat"],"application/bdoc":["bdoc"],"application/calendar+xml":["xcs"],"application/ccxml+xml":["ccxml"],"application/cdfx+xml":["cdfx"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["es","ecma"],"application/emma+xml":["emma"],"application/emotionml+xml":["emotionml"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/express":["exp"],"application/fdt+xml":["fdt"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/its+xml":["its"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lgr+xml":["lgr"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mmt-aei+xml":["maei"],"application/mmt-usd+xml":["musd"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/node":["cjs"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/p2p-overlay+xml":["relo"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/provenance+xml":["provx"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/route-apd+xml":["rapd"],"application/route-s-tsid+xml":["sls"],"application/route-usd+xml":["rusd"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/senml+xml":["senmlx"],"application/sensml+xml":["sensmlx"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/swid+xml":["swidtag"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/toml":["toml"],"application/trig":["trig"],"application/ttml+xml":["ttml"],"application/ubjson":["ubj"],"application/urc-ressheet+xml":["rsheet"],"application/urc-targetdesc+xml":["td"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-att+xml":["xav"],"application/xcap-caps+xml":["xca"],"application/xcap-diff+xml":["xdf"],"application/xcap-el+xml":["xel"],"application/xcap-ns+xml":["xns"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xliff+xml":["xlf"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["*xsl","xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/amr":["amr"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mobile-xmf":["mxmf"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx","opus"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/avif":["avif"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/hej2k":["hej2"],"image/hsj2":["hsj2"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jph":["jph"],"image/jphc":["jhc"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/jxra":["jxra"],"image/jxrs":["jxrs"],"image/jxs":["jxs"],"image/jxsc":["jxsc"],"image/jxsi":["jxsi"],"image/jxss":["jxss"],"image/ktx":["ktx"],"image/ktx2":["ktx2"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/mtl":["mtl"],"model/obj":["obj"],"model/step+xml":["stpx"],"model/step+zip":["stpz"],"model/step-xml+zip":["stpxz"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/spdx":["spdx"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/iso.segment":["m4s"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var other = {"application/prs.cww":["cww"],"application/vnd.1000minds.decision-model+xml":["1km"],"application/vnd.3gpp.pic-bw-large":["plb"],"application/vnd.3gpp.pic-bw-small":["psb"],"application/vnd.3gpp.pic-bw-var":["pvb"],"application/vnd.3gpp2.tcap":["tcap"],"application/vnd.3m.post-it-notes":["pwn"],"application/vnd.accpac.simply.aso":["aso"],"application/vnd.accpac.simply.imp":["imp"],"application/vnd.acucobol":["acu"],"application/vnd.acucorp":["atc","acutc"],"application/vnd.adobe.air-application-installer-package+zip":["air"],"application/vnd.adobe.formscentral.fcdt":["fcdt"],"application/vnd.adobe.fxp":["fxp","fxpl"],"application/vnd.adobe.xdp+xml":["xdp"],"application/vnd.adobe.xfdf":["xfdf"],"application/vnd.ahead.space":["ahead"],"application/vnd.airzip.filesecure.azf":["azf"],"application/vnd.airzip.filesecure.azs":["azs"],"application/vnd.amazon.ebook":["azw"],"application/vnd.americandynamics.acc":["acc"],"application/vnd.amiga.ami":["ami"],"application/vnd.android.package-archive":["apk"],"application/vnd.anser-web-certificate-issue-initiation":["cii"],"application/vnd.anser-web-funds-transfer-initiation":["fti"],"application/vnd.antix.game-component":["atx"],"application/vnd.apple.installer+xml":["mpkg"],"application/vnd.apple.keynote":["key"],"application/vnd.apple.mpegurl":["m3u8"],"application/vnd.apple.numbers":["numbers"],"application/vnd.apple.pages":["pages"],"application/vnd.apple.pkpass":["pkpass"],"application/vnd.aristanetworks.swi":["swi"],"application/vnd.astraea-software.iota":["iota"],"application/vnd.audiograph":["aep"],"application/vnd.balsamiq.bmml+xml":["bmml"],"application/vnd.blueice.multipass":["mpm"],"application/vnd.bmi":["bmi"],"application/vnd.businessobjects":["rep"],"application/vnd.chemdraw+xml":["cdxml"],"application/vnd.chipnuts.karaoke-mmd":["mmd"],"application/vnd.cinderella":["cdy"],"application/vnd.citationstyles.style+xml":["csl"],"application/vnd.claymore":["cla"],"application/vnd.cloanto.rp9":["rp9"],"application/vnd.clonk.c4group":["c4g","c4d","c4f","c4p","c4u"],"application/vnd.cluetrust.cartomobile-config":["c11amc"],"application/vnd.cluetrust.cartomobile-config-pkg":["c11amz"],"application/vnd.commonspace":["csp"],"application/vnd.contact.cmsg":["cdbcmsg"],"application/vnd.cosmocaller":["cmc"],"application/vnd.crick.clicker":["clkx"],"application/vnd.crick.clicker.keyboard":["clkk"],"application/vnd.crick.clicker.palette":["clkp"],"application/vnd.crick.clicker.template":["clkt"],"application/vnd.crick.clicker.wordbank":["clkw"],"application/vnd.criticaltools.wbs+xml":["wbs"],"application/vnd.ctc-posml":["pml"],"application/vnd.cups-ppd":["ppd"],"application/vnd.curl.car":["car"],"application/vnd.curl.pcurl":["pcurl"],"application/vnd.dart":["dart"],"application/vnd.data-vision.rdz":["rdz"],"application/vnd.dbf":["dbf"],"application/vnd.dece.data":["uvf","uvvf","uvd","uvvd"],"application/vnd.dece.ttml+xml":["uvt","uvvt"],"application/vnd.dece.unspecified":["uvx","uvvx"],"application/vnd.dece.zip":["uvz","uvvz"],"application/vnd.denovo.fcselayout-link":["fe_launch"],"application/vnd.dna":["dna"],"application/vnd.dolby.mlp":["mlp"],"application/vnd.dpgraph":["dpg"],"application/vnd.dreamfactory":["dfac"],"application/vnd.ds-keypoint":["kpxx"],"application/vnd.dvb.ait":["ait"],"application/vnd.dvb.service":["svc"],"application/vnd.dynageo":["geo"],"application/vnd.ecowin.chart":["mag"],"application/vnd.enliven":["nml"],"application/vnd.epson.esf":["esf"],"application/vnd.epson.msf":["msf"],"application/vnd.epson.quickanime":["qam"],"application/vnd.epson.salt":["slt"],"application/vnd.epson.ssf":["ssf"],"application/vnd.eszigno3+xml":["es3","et3"],"application/vnd.ezpix-album":["ez2"],"application/vnd.ezpix-package":["ez3"],"application/vnd.fdf":["fdf"],"application/vnd.fdsn.mseed":["mseed"],"application/vnd.fdsn.seed":["seed","dataless"],"application/vnd.flographit":["gph"],"application/vnd.fluxtime.clip":["ftc"],"application/vnd.framemaker":["fm","frame","maker","book"],"application/vnd.frogans.fnc":["fnc"],"application/vnd.frogans.ltf":["ltf"],"application/vnd.fsc.weblaunch":["fsc"],"application/vnd.fujitsu.oasys":["oas"],"application/vnd.fujitsu.oasys2":["oa2"],"application/vnd.fujitsu.oasys3":["oa3"],"application/vnd.fujitsu.oasysgp":["fg5"],"application/vnd.fujitsu.oasysprs":["bh2"],"application/vnd.fujixerox.ddd":["ddd"],"application/vnd.fujixerox.docuworks":["xdw"],"application/vnd.fujixerox.docuworks.binder":["xbd"],"application/vnd.fuzzysheet":["fzs"],"application/vnd.genomatix.tuxedo":["txd"],"application/vnd.geogebra.file":["ggb"],"application/vnd.geogebra.tool":["ggt"],"application/vnd.geometry-explorer":["gex","gre"],"application/vnd.geonext":["gxt"],"application/vnd.geoplan":["g2w"],"application/vnd.geospace":["g3w"],"application/vnd.gmx":["gmx"],"application/vnd.google-apps.document":["gdoc"],"application/vnd.google-apps.presentation":["gslides"],"application/vnd.google-apps.spreadsheet":["gsheet"],"application/vnd.google-earth.kml+xml":["kml"],"application/vnd.google-earth.kmz":["kmz"],"application/vnd.grafeq":["gqf","gqs"],"application/vnd.groove-account":["gac"],"application/vnd.groove-help":["ghf"],"application/vnd.groove-identity-message":["gim"],"application/vnd.groove-injector":["grv"],"application/vnd.groove-tool-message":["gtm"],"application/vnd.groove-tool-template":["tpl"],"application/vnd.groove-vcard":["vcg"],"application/vnd.hal+xml":["hal"],"application/vnd.handheld-entertainment+xml":["zmm"],"application/vnd.hbci":["hbci"],"application/vnd.hhe.lesson-player":["les"],"application/vnd.hp-hpgl":["hpgl"],"application/vnd.hp-hpid":["hpid"],"application/vnd.hp-hps":["hps"],"application/vnd.hp-jlyt":["jlt"],"application/vnd.hp-pcl":["pcl"],"application/vnd.hp-pclxl":["pclxl"],"application/vnd.hydrostatix.sof-data":["sfd-hdstx"],"application/vnd.ibm.minipay":["mpy"],"application/vnd.ibm.modcap":["afp","listafp","list3820"],"application/vnd.ibm.rights-management":["irm"],"application/vnd.ibm.secure-container":["sc"],"application/vnd.iccprofile":["icc","icm"],"application/vnd.igloader":["igl"],"application/vnd.immervision-ivp":["ivp"],"application/vnd.immervision-ivu":["ivu"],"application/vnd.insors.igm":["igm"],"application/vnd.intercon.formnet":["xpw","xpx"],"application/vnd.intergeo":["i2g"],"application/vnd.intu.qbo":["qbo"],"application/vnd.intu.qfx":["qfx"],"application/vnd.ipunplugged.rcprofile":["rcprofile"],"application/vnd.irepository.package+xml":["irp"],"application/vnd.is-xpr":["xpr"],"application/vnd.isac.fcs":["fcs"],"application/vnd.jam":["jam"],"application/vnd.jcp.javame.midlet-rms":["rms"],"application/vnd.jisp":["jisp"],"application/vnd.joost.joda-archive":["joda"],"application/vnd.kahootz":["ktz","ktr"],"application/vnd.kde.karbon":["karbon"],"application/vnd.kde.kchart":["chrt"],"application/vnd.kde.kformula":["kfo"],"application/vnd.kde.kivio":["flw"],"application/vnd.kde.kontour":["kon"],"application/vnd.kde.kpresenter":["kpr","kpt"],"application/vnd.kde.kspread":["ksp"],"application/vnd.kde.kword":["kwd","kwt"],"application/vnd.kenameaapp":["htke"],"application/vnd.kidspiration":["kia"],"application/vnd.kinar":["kne","knp"],"application/vnd.koan":["skp","skd","skt","skm"],"application/vnd.kodak-descriptor":["sse"],"application/vnd.las.las+xml":["lasxml"],"application/vnd.llamagraphics.life-balance.desktop":["lbd"],"application/vnd.llamagraphics.life-balance.exchange+xml":["lbe"],"application/vnd.lotus-1-2-3":["123"],"application/vnd.lotus-approach":["apr"],"application/vnd.lotus-freelance":["pre"],"application/vnd.lotus-notes":["nsf"],"application/vnd.lotus-organizer":["org"],"application/vnd.lotus-screencam":["scm"],"application/vnd.lotus-wordpro":["lwp"],"application/vnd.macports.portpkg":["portpkg"],"application/vnd.mapbox-vector-tile":["mvt"],"application/vnd.mcd":["mcd"],"application/vnd.medcalcdata":["mc1"],"application/vnd.mediastation.cdkey":["cdkey"],"application/vnd.mfer":["mwf"],"application/vnd.mfmp":["mfm"],"application/vnd.micrografx.flo":["flo"],"application/vnd.micrografx.igx":["igx"],"application/vnd.mif":["mif"],"application/vnd.mobius.daf":["daf"],"application/vnd.mobius.dis":["dis"],"application/vnd.mobius.mbk":["mbk"],"application/vnd.mobius.mqy":["mqy"],"application/vnd.mobius.msl":["msl"],"application/vnd.mobius.plc":["plc"],"application/vnd.mobius.txf":["txf"],"application/vnd.mophun.application":["mpn"],"application/vnd.mophun.certificate":["mpc"],"application/vnd.mozilla.xul+xml":["xul"],"application/vnd.ms-artgalry":["cil"],"application/vnd.ms-cab-compressed":["cab"],"application/vnd.ms-excel":["xls","xlm","xla","xlc","xlt","xlw"],"application/vnd.ms-excel.addin.macroenabled.12":["xlam"],"application/vnd.ms-excel.sheet.binary.macroenabled.12":["xlsb"],"application/vnd.ms-excel.sheet.macroenabled.12":["xlsm"],"application/vnd.ms-excel.template.macroenabled.12":["xltm"],"application/vnd.ms-fontobject":["eot"],"application/vnd.ms-htmlhelp":["chm"],"application/vnd.ms-ims":["ims"],"application/vnd.ms-lrm":["lrm"],"application/vnd.ms-officetheme":["thmx"],"application/vnd.ms-outlook":["msg"],"application/vnd.ms-pki.seccat":["cat"],"application/vnd.ms-pki.stl":["*stl"],"application/vnd.ms-powerpoint":["ppt","pps","pot"],"application/vnd.ms-powerpoint.addin.macroenabled.12":["ppam"],"application/vnd.ms-powerpoint.presentation.macroenabled.12":["pptm"],"application/vnd.ms-powerpoint.slide.macroenabled.12":["sldm"],"application/vnd.ms-powerpoint.slideshow.macroenabled.12":["ppsm"],"application/vnd.ms-powerpoint.template.macroenabled.12":["potm"],"application/vnd.ms-project":["mpp","mpt"],"application/vnd.ms-word.document.macroenabled.12":["docm"],"application/vnd.ms-word.template.macroenabled.12":["dotm"],"application/vnd.ms-works":["wps","wks","wcm","wdb"],"application/vnd.ms-wpl":["wpl"],"application/vnd.ms-xpsdocument":["xps"],"application/vnd.mseq":["mseq"],"application/vnd.musician":["mus"],"application/vnd.muvee.style":["msty"],"application/vnd.mynfc":["taglet"],"application/vnd.neurolanguage.nlu":["nlu"],"application/vnd.nitf":["ntf","nitf"],"application/vnd.noblenet-directory":["nnd"],"application/vnd.noblenet-sealer":["nns"],"application/vnd.noblenet-web":["nnw"],"application/vnd.nokia.n-gage.ac+xml":["*ac"],"application/vnd.nokia.n-gage.data":["ngdat"],"application/vnd.nokia.n-gage.symbian.install":["n-gage"],"application/vnd.nokia.radio-preset":["rpst"],"application/vnd.nokia.radio-presets":["rpss"],"application/vnd.novadigm.edm":["edm"],"application/vnd.novadigm.edx":["edx"],"application/vnd.novadigm.ext":["ext"],"application/vnd.oasis.opendocument.chart":["odc"],"application/vnd.oasis.opendocument.chart-template":["otc"],"application/vnd.oasis.opendocument.database":["odb"],"application/vnd.oasis.opendocument.formula":["odf"],"application/vnd.oasis.opendocument.formula-template":["odft"],"application/vnd.oasis.opendocument.graphics":["odg"],"application/vnd.oasis.opendocument.graphics-template":["otg"],"application/vnd.oasis.opendocument.image":["odi"],"application/vnd.oasis.opendocument.image-template":["oti"],"application/vnd.oasis.opendocument.presentation":["odp"],"application/vnd.oasis.opendocument.presentation-template":["otp"],"application/vnd.oasis.opendocument.spreadsheet":["ods"],"application/vnd.oasis.opendocument.spreadsheet-template":["ots"],"application/vnd.oasis.opendocument.text":["odt"],"application/vnd.oasis.opendocument.text-master":["odm"],"application/vnd.oasis.opendocument.text-template":["ott"],"application/vnd.oasis.opendocument.text-web":["oth"],"application/vnd.olpc-sugar":["xo"],"application/vnd.oma.dd2+xml":["dd2"],"application/vnd.openblox.game+xml":["obgx"],"application/vnd.openofficeorg.extension":["oxt"],"application/vnd.openstreetmap.data+xml":["osm"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":["pptx"],"application/vnd.openxmlformats-officedocument.presentationml.slide":["sldx"],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":["ppsx"],"application/vnd.openxmlformats-officedocument.presentationml.template":["potx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":["xlsx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":["xltx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":["docx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.template":["dotx"],"application/vnd.osgeo.mapguide.package":["mgp"],"application/vnd.osgi.dp":["dp"],"application/vnd.osgi.subsystem":["esa"],"application/vnd.palm":["pdb","pqa","oprc"],"application/vnd.pawaafile":["paw"],"application/vnd.pg.format":["str"],"application/vnd.pg.osasli":["ei6"],"application/vnd.picsel":["efif"],"application/vnd.pmi.widget":["wg"],"application/vnd.pocketlearn":["plf"],"application/vnd.powerbuilder6":["pbd"],"application/vnd.previewsystems.box":["box"],"application/vnd.proteus.magazine":["mgz"],"application/vnd.publishare-delta-tree":["qps"],"application/vnd.pvi.ptid1":["ptid"],"application/vnd.quark.quarkxpress":["qxd","qxt","qwd","qwt","qxl","qxb"],"application/vnd.rar":["rar"],"application/vnd.realvnc.bed":["bed"],"application/vnd.recordare.musicxml":["mxl"],"application/vnd.recordare.musicxml+xml":["musicxml"],"application/vnd.rig.cryptonote":["cryptonote"],"application/vnd.rim.cod":["cod"],"application/vnd.rn-realmedia":["rm"],"application/vnd.rn-realmedia-vbr":["rmvb"],"application/vnd.route66.link66+xml":["link66"],"application/vnd.sailingtracker.track":["st"],"application/vnd.seemail":["see"],"application/vnd.sema":["sema"],"application/vnd.semd":["semd"],"application/vnd.semf":["semf"],"application/vnd.shana.informed.formdata":["ifm"],"application/vnd.shana.informed.formtemplate":["itp"],"application/vnd.shana.informed.interchange":["iif"],"application/vnd.shana.informed.package":["ipk"],"application/vnd.simtech-mindmapper":["twd","twds"],"application/vnd.smaf":["mmf"],"application/vnd.smart.teacher":["teacher"],"application/vnd.software602.filler.form+xml":["fo"],"application/vnd.solent.sdkm+xml":["sdkm","sdkd"],"application/vnd.spotfire.dxp":["dxp"],"application/vnd.spotfire.sfs":["sfs"],"application/vnd.stardivision.calc":["sdc"],"application/vnd.stardivision.draw":["sda"],"application/vnd.stardivision.impress":["sdd"],"application/vnd.stardivision.math":["smf"],"application/vnd.stardivision.writer":["sdw","vor"],"application/vnd.stardivision.writer-global":["sgl"],"application/vnd.stepmania.package":["smzip"],"application/vnd.stepmania.stepchart":["sm"],"application/vnd.sun.wadl+xml":["wadl"],"application/vnd.sun.xml.calc":["sxc"],"application/vnd.sun.xml.calc.template":["stc"],"application/vnd.sun.xml.draw":["sxd"],"application/vnd.sun.xml.draw.template":["std"],"application/vnd.sun.xml.impress":["sxi"],"application/vnd.sun.xml.impress.template":["sti"],"application/vnd.sun.xml.math":["sxm"],"application/vnd.sun.xml.writer":["sxw"],"application/vnd.sun.xml.writer.global":["sxg"],"application/vnd.sun.xml.writer.template":["stw"],"application/vnd.sus-calendar":["sus","susp"],"application/vnd.svd":["svd"],"application/vnd.symbian.install":["sis","sisx"],"application/vnd.syncml+xml":["xsm"],"application/vnd.syncml.dm+wbxml":["bdm"],"application/vnd.syncml.dm+xml":["xdm"],"application/vnd.syncml.dmddf+xml":["ddf"],"application/vnd.tao.intent-module-archive":["tao"],"application/vnd.tcpdump.pcap":["pcap","cap","dmp"],"application/vnd.tmobile-livetv":["tmo"],"application/vnd.trid.tpt":["tpt"],"application/vnd.triscape.mxs":["mxs"],"application/vnd.trueapp":["tra"],"application/vnd.ufdl":["ufd","ufdl"],"application/vnd.uiq.theme":["utz"],"application/vnd.umajin":["umj"],"application/vnd.unity":["unityweb"],"application/vnd.uoml+xml":["uoml"],"application/vnd.vcx":["vcx"],"application/vnd.visio":["vsd","vst","vss","vsw"],"application/vnd.visionary":["vis"],"application/vnd.vsf":["vsf"],"application/vnd.wap.wbxml":["wbxml"],"application/vnd.wap.wmlc":["wmlc"],"application/vnd.wap.wmlscriptc":["wmlsc"],"application/vnd.webturbo":["wtb"],"application/vnd.wolfram.player":["nbp"],"application/vnd.wordperfect":["wpd"],"application/vnd.wqd":["wqd"],"application/vnd.wt.stf":["stf"],"application/vnd.xara":["xar"],"application/vnd.xfdl":["xfdl"],"application/vnd.yamaha.hv-dic":["hvd"],"application/vnd.yamaha.hv-script":["hvs"],"application/vnd.yamaha.hv-voice":["hvp"],"application/vnd.yamaha.openscoreformat":["osf"],"application/vnd.yamaha.openscoreformat.osfpvg+xml":["osfpvg"],"application/vnd.yamaha.smaf-audio":["saf"],"application/vnd.yamaha.smaf-phrase":["spf"],"application/vnd.yellowriver-custom-menu":["cmp"],"application/vnd.zul":["zir","zirz"],"application/vnd.zzazz.deck+xml":["zaz"],"application/x-7z-compressed":["7z"],"application/x-abiword":["abw"],"application/x-ace-compressed":["ace"],"application/x-apple-diskimage":["*dmg"],"application/x-arj":["arj"],"application/x-authorware-bin":["aab","x32","u32","vox"],"application/x-authorware-map":["aam"],"application/x-authorware-seg":["aas"],"application/x-bcpio":["bcpio"],"application/x-bdoc":["*bdoc"],"application/x-bittorrent":["torrent"],"application/x-blorb":["blb","blorb"],"application/x-bzip":["bz"],"application/x-bzip2":["bz2","boz"],"application/x-cbr":["cbr","cba","cbt","cbz","cb7"],"application/x-cdlink":["vcd"],"application/x-cfs-compressed":["cfs"],"application/x-chat":["chat"],"application/x-chess-pgn":["pgn"],"application/x-chrome-extension":["crx"],"application/x-cocoa":["cco"],"application/x-conference":["nsc"],"application/x-cpio":["cpio"],"application/x-csh":["csh"],"application/x-debian-package":["*deb","udeb"],"application/x-dgc-compressed":["dgc"],"application/x-director":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"],"application/x-doom":["wad"],"application/x-dtbncx+xml":["ncx"],"application/x-dtbook+xml":["dtb"],"application/x-dtbresource+xml":["res"],"application/x-dvi":["dvi"],"application/x-envoy":["evy"],"application/x-eva":["eva"],"application/x-font-bdf":["bdf"],"application/x-font-ghostscript":["gsf"],"application/x-font-linux-psf":["psf"],"application/x-font-pcf":["pcf"],"application/x-font-snf":["snf"],"application/x-font-type1":["pfa","pfb","pfm","afm"],"application/x-freearc":["arc"],"application/x-futuresplash":["spl"],"application/x-gca-compressed":["gca"],"application/x-glulx":["ulx"],"application/x-gnumeric":["gnumeric"],"application/x-gramps-xml":["gramps"],"application/x-gtar":["gtar"],"application/x-hdf":["hdf"],"application/x-httpd-php":["php"],"application/x-install-instructions":["install"],"application/x-iso9660-image":["*iso"],"application/x-iwork-keynote-sffkey":["*key"],"application/x-iwork-numbers-sffnumbers":["*numbers"],"application/x-iwork-pages-sffpages":["*pages"],"application/x-java-archive-diff":["jardiff"],"application/x-java-jnlp-file":["jnlp"],"application/x-keepass2":["kdbx"],"application/x-latex":["latex"],"application/x-lua-bytecode":["luac"],"application/x-lzh-compressed":["lzh","lha"],"application/x-makeself":["run"],"application/x-mie":["mie"],"application/x-mobipocket-ebook":["prc","mobi"],"application/x-ms-application":["application"],"application/x-ms-shortcut":["lnk"],"application/x-ms-wmd":["wmd"],"application/x-ms-wmz":["wmz"],"application/x-ms-xbap":["xbap"],"application/x-msaccess":["mdb"],"application/x-msbinder":["obd"],"application/x-mscardfile":["crd"],"application/x-msclip":["clp"],"application/x-msdos-program":["*exe"],"application/x-msdownload":["*exe","*dll","com","bat","*msi"],"application/x-msmediaview":["mvb","m13","m14"],"application/x-msmetafile":["*wmf","*wmz","*emf","emz"],"application/x-msmoney":["mny"],"application/x-mspublisher":["pub"],"application/x-msschedule":["scd"],"application/x-msterminal":["trm"],"application/x-mswrite":["wri"],"application/x-netcdf":["nc","cdf"],"application/x-ns-proxy-autoconfig":["pac"],"application/x-nzb":["nzb"],"application/x-perl":["pl","pm"],"application/x-pilot":["*prc","*pdb"],"application/x-pkcs12":["p12","pfx"],"application/x-pkcs7-certificates":["p7b","spc"],"application/x-pkcs7-certreqresp":["p7r"],"application/x-rar-compressed":["*rar"],"application/x-redhat-package-manager":["rpm"],"application/x-research-info-systems":["ris"],"application/x-sea":["sea"],"application/x-sh":["sh"],"application/x-shar":["shar"],"application/x-shockwave-flash":["swf"],"application/x-silverlight-app":["xap"],"application/x-sql":["sql"],"application/x-stuffit":["sit"],"application/x-stuffitx":["sitx"],"application/x-subrip":["srt"],"application/x-sv4cpio":["sv4cpio"],"application/x-sv4crc":["sv4crc"],"application/x-t3vm-image":["t3"],"application/x-tads":["gam"],"application/x-tar":["tar"],"application/x-tcl":["tcl","tk"],"application/x-tex":["tex"],"application/x-tex-tfm":["tfm"],"application/x-texinfo":["texinfo","texi"],"application/x-tgif":["*obj"],"application/x-ustar":["ustar"],"application/x-virtualbox-hdd":["hdd"],"application/x-virtualbox-ova":["ova"],"application/x-virtualbox-ovf":["ovf"],"application/x-virtualbox-vbox":["vbox"],"application/x-virtualbox-vbox-extpack":["vbox-extpack"],"application/x-virtualbox-vdi":["vdi"],"application/x-virtualbox-vhd":["vhd"],"application/x-virtualbox-vmdk":["vmdk"],"application/x-wais-source":["src"],"application/x-web-app-manifest+json":["webapp"],"application/x-x509-ca-cert":["der","crt","pem"],"application/x-xfig":["fig"],"application/x-xliff+xml":["*xlf"],"application/x-xpinstall":["xpi"],"application/x-xz":["xz"],"application/x-zmachine":["z1","z2","z3","z4","z5","z6","z7","z8"],"audio/vnd.dece.audio":["uva","uvva"],"audio/vnd.digital-winds":["eol"],"audio/vnd.dra":["dra"],"audio/vnd.dts":["dts"],"audio/vnd.dts.hd":["dtshd"],"audio/vnd.lucent.voice":["lvp"],"audio/vnd.ms-playready.media.pya":["pya"],"audio/vnd.nuera.ecelp4800":["ecelp4800"],"audio/vnd.nuera.ecelp7470":["ecelp7470"],"audio/vnd.nuera.ecelp9600":["ecelp9600"],"audio/vnd.rip":["rip"],"audio/x-aac":["aac"],"audio/x-aiff":["aif","aiff","aifc"],"audio/x-caf":["caf"],"audio/x-flac":["flac"],"audio/x-m4a":["*m4a"],"audio/x-matroska":["mka"],"audio/x-mpegurl":["m3u"],"audio/x-ms-wax":["wax"],"audio/x-ms-wma":["wma"],"audio/x-pn-realaudio":["ram","ra"],"audio/x-pn-realaudio-plugin":["rmp"],"audio/x-realaudio":["*ra"],"audio/x-wav":["*wav"],"chemical/x-cdx":["cdx"],"chemical/x-cif":["cif"],"chemical/x-cmdf":["cmdf"],"chemical/x-cml":["cml"],"chemical/x-csml":["csml"],"chemical/x-xyz":["xyz"],"image/prs.btif":["btif"],"image/prs.pti":["pti"],"image/vnd.adobe.photoshop":["psd"],"image/vnd.airzip.accelerator.azv":["azv"],"image/vnd.dece.graphic":["uvi","uvvi","uvg","uvvg"],"image/vnd.djvu":["djvu","djv"],"image/vnd.dvb.subtitle":["*sub"],"image/vnd.dwg":["dwg"],"image/vnd.dxf":["dxf"],"image/vnd.fastbidsheet":["fbs"],"image/vnd.fpx":["fpx"],"image/vnd.fst":["fst"],"image/vnd.fujixerox.edmics-mmr":["mmr"],"image/vnd.fujixerox.edmics-rlc":["rlc"],"image/vnd.microsoft.icon":["ico"],"image/vnd.ms-dds":["dds"],"image/vnd.ms-modi":["mdi"],"image/vnd.ms-photo":["wdp"],"image/vnd.net-fpx":["npx"],"image/vnd.pco.b16":["b16"],"image/vnd.tencent.tap":["tap"],"image/vnd.valve.source.texture":["vtf"],"image/vnd.wap.wbmp":["wbmp"],"image/vnd.xiff":["xif"],"image/vnd.zbrush.pcx":["pcx"],"image/x-3ds":["3ds"],"image/x-cmu-raster":["ras"],"image/x-cmx":["cmx"],"image/x-freehand":["fh","fhc","fh4","fh5","fh7"],"image/x-icon":["*ico"],"image/x-jng":["jng"],"image/x-mrsid-image":["sid"],"image/x-ms-bmp":["*bmp"],"image/x-pcx":["*pcx"],"image/x-pict":["pic","pct"],"image/x-portable-anymap":["pnm"],"image/x-portable-bitmap":["pbm"],"image/x-portable-graymap":["pgm"],"image/x-portable-pixmap":["ppm"],"image/x-rgb":["rgb"],"image/x-tga":["tga"],"image/x-xbitmap":["xbm"],"image/x-xpixmap":["xpm"],"image/x-xwindowdump":["xwd"],"message/vnd.wfa.wsc":["wsc"],"model/vnd.collada+xml":["dae"],"model/vnd.dwf":["dwf"],"model/vnd.gdl":["gdl"],"model/vnd.gtw":["gtw"],"model/vnd.mts":["mts"],"model/vnd.opengex":["ogex"],"model/vnd.parasolid.transmit.binary":["x_b"],"model/vnd.parasolid.transmit.text":["x_t"],"model/vnd.sap.vds":["vds"],"model/vnd.usdz+zip":["usdz"],"model/vnd.valve.source.compiled-map":["bsp"],"model/vnd.vtu":["vtu"],"text/prs.lines.tag":["dsc"],"text/vnd.curl":["curl"],"text/vnd.curl.dcurl":["dcurl"],"text/vnd.curl.mcurl":["mcurl"],"text/vnd.curl.scurl":["scurl"],"text/vnd.dvb.subtitle":["sub"],"text/vnd.fly":["fly"],"text/vnd.fmi.flexstor":["flx"],"text/vnd.graphviz":["gv"],"text/vnd.in3d.3dml":["3dml"],"text/vnd.in3d.spot":["spot"],"text/vnd.sun.j2me.app-descriptor":["jad"],"text/vnd.wap.wml":["wml"],"text/vnd.wap.wmlscript":["wmls"],"text/x-asm":["s","asm"],"text/x-c":["c","cc","cxx","cpp","h","hh","dic"],"text/x-component":["htc"],"text/x-fortran":["f","for","f77","f90"],"text/x-handlebars-template":["hbs"],"text/x-java-source":["java"],"text/x-lua":["lua"],"text/x-markdown":["mkd"],"text/x-nfo":["nfo"],"text/x-opml":["opml"],"text/x-org":["*org"],"text/x-pascal":["p","pas"],"text/x-processing":["pde"],"text/x-sass":["sass"],"text/x-scss":["scss"],"text/x-setext":["etx"],"text/x-sfv":["sfv"],"text/x-suse-ymp":["ymp"],"text/x-uuencode":["uu"],"text/x-vcalendar":["vcs"],"text/x-vcard":["vcf"],"video/vnd.dece.hd":["uvh","uvvh"],"video/vnd.dece.mobile":["uvm","uvvm"],"video/vnd.dece.pd":["uvp","uvvp"],"video/vnd.dece.sd":["uvs","uvvs"],"video/vnd.dece.video":["uvv","uvvv"],"video/vnd.dvb.file":["dvb"],"video/vnd.fvt":["fvt"],"video/vnd.mpegurl":["mxu","m4u"],"video/vnd.ms-playready.media.pyv":["pyv"],"video/vnd.uvvu.mp4":["uvu","uvvu"],"video/vnd.vivo":["viv"],"video/x-f4v":["f4v"],"video/x-fli":["fli"],"video/x-flv":["flv"],"video/x-m4v":["m4v"],"video/x-matroska":["mkv","mk3d","mks"],"video/x-mng":["mng"],"video/x-ms-asf":["asf","asx"],"video/x-ms-vob":["vob"],"video/x-ms-wm":["wm"],"video/x-ms-wmv":["wmv"],"video/x-ms-wmx":["wmx"],"video/x-ms-wvx":["wvx"],"video/x-msvideo":["avi"],"video/x-sgi-movie":["movie"],"video/x-smv":["smv"],"x-conference/x-cooltalk":["ice"]};

let Mime = Mime_1;
new Mime(standard, other);

new TextEncoder();

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/astro-examples/_astro/hoisted.e3fc264d.js"}],"styles":[{"type":"external","src":"/astro-examples/_astro/hoisted.53648be4.css"},{"type":"external","src":"/astro-examples/_astro/index.7acba907.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/astro-examples","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Dev/MicroWebStacks/astro/astro-examples/00_website/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index_fd4a998f.mjs","\u0000@astrojs-manifest":"manifest_fe7ab4ea.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/abap.mjs":"chunks/abap_c4e8a686.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/actionscript-3.mjs":"chunks/actionscript-3_a4307eca.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/ada.mjs":"chunks/ada_37825ada.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/apache.mjs":"chunks/apache_800b426a.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/apex.mjs":"chunks/apex_93ea99f6.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/apl.mjs":"chunks/apl_6dbb6698.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/applescript.mjs":"chunks/applescript_7ff31a9e.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/ara.mjs":"chunks/ara_fd26511c.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/asm.mjs":"chunks/asm_bc0ed39c.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/astro.mjs":"chunks/astro_67ac4089.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/awk.mjs":"chunks/awk_97a29722.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/ballerina.mjs":"chunks/ballerina_209a452a.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/bat.mjs":"chunks/bat_1fc78d58.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/beancount.mjs":"chunks/beancount_c1106d17.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/berry.mjs":"chunks/berry_3e9e45a1.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/bibtex.mjs":"chunks/bibtex_dab21ee7.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/bicep.mjs":"chunks/bicep_8ee8d8f2.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/blade.mjs":"chunks/blade_4249f445.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/cadence.mjs":"chunks/cadence_9ecefe0a.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/clarity.mjs":"chunks/clarity_7684bb1d.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/cobol.mjs":"chunks/cobol_ccca1dbb.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/codeql.mjs":"chunks/codeql_5d9c71aa.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/html.mjs":"chunks/html_776a19f7.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/xml.mjs":"chunks/xml_6bf28089.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/css.mjs":"chunks/css_3bffa9b0.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/javascript.mjs":"chunks/javascript_78122384.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/json.mjs":"chunks/json_e36dbadf.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/java.mjs":"chunks/java_b36a89bb.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/typescript.mjs":"chunks/typescript_95afed98.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/stylus.mjs":"chunks/stylus_9e6b7c69.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/sass.mjs":"chunks/sass_2f8a90c6.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/scss.mjs":"chunks/scss_4f9db815.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/less.mjs":"chunks/less_6e745052.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/postcss.mjs":"chunks/postcss_e036a9fd.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/tsx.mjs":"chunks/tsx_bf5a80fb.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/sql.mjs":"chunks/sql_1d674688.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/c.mjs":"chunks/c_7bcddbf3.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/clojure.mjs":"chunks/clojure_21ee6759.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/cmake.mjs":"chunks/cmake_68860cf1.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/coffee.mjs":"chunks/coffee_bc3e7808.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/cpp.mjs":"chunks/cpp_5d8d748b.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/glsl.mjs":"chunks/glsl_84a9b2db.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/crystal.mjs":"chunks/crystal_d463dcfc.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/shellscript.mjs":"chunks/shellscript_54242dab.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/csharp.mjs":"chunks/csharp_76d67937.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/cue.mjs":"chunks/cue_d1e116ff.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/cypher.mjs":"chunks/cypher_d3f90a1f.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/d.mjs":"chunks/d_91f3a273.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/dart.mjs":"chunks/dart_18f4020d.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/dax.mjs":"chunks/dax_21f11797.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/diff.mjs":"chunks/diff_05acac23.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/docker.mjs":"chunks/docker_aaa834a3.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/dream-maker.mjs":"chunks/dream-maker_30ce8c88.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/elixir.mjs":"chunks/elixir_d31892b2.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/elm.mjs":"chunks/elm_9cca2712.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/erb.mjs":"chunks/erb_45365258.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/ruby.mjs":"chunks/ruby_a0c2b0d9.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/lua.mjs":"chunks/lua_1fce3c9e.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/erlang.mjs":"chunks/erlang_a119c8e1.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/fish.mjs":"chunks/fish_b8ac1228.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/fsharp.mjs":"chunks/fsharp_671955ba.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/markdown.mjs":"chunks/markdown_cbba721d.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/gdresource.mjs":"chunks/gdresource_da7e95cf.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/gdshader.mjs":"chunks/gdshader_17e66958.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/gdscript.mjs":"chunks/gdscript_3663dae0.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/gherkin.mjs":"chunks/gherkin_cf853aab.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/git-commit.mjs":"chunks/git-commit_f25bd446.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/git-rebase.mjs":"chunks/git-rebase_27098e91.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/glimmer-js.mjs":"chunks/glimmer-js_954b9658.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/handlebars.mjs":"chunks/handlebars_c5ab2f51.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/yaml.mjs":"chunks/yaml_a1f70f1a.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/glimmer-ts.mjs":"chunks/glimmer-ts_731d7377.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/gnuplot.mjs":"chunks/gnuplot_064c9701.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/go.mjs":"chunks/go_99671c7f.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/graphql.mjs":"chunks/graphql_18c802a9.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/jsx.mjs":"chunks/jsx_936d7c66.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/groovy.mjs":"chunks/groovy_8885900c.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/hack.mjs":"chunks/hack_0541627b.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/haml.mjs":"chunks/haml_31edf16b.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/haskell.mjs":"chunks/haskell_69459b5c.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/hcl.mjs":"chunks/hcl_c66b6cc0.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/hjson.mjs":"chunks/hjson_c103094f.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/hlsl.mjs":"chunks/hlsl_ed451a1c.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/http.mjs":"chunks/http_11af6293.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/imba.mjs":"chunks/imba_2cdc6c19.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/ini.mjs":"chunks/ini_bc64dff2.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/jinja-html.mjs":"chunks/jinja-html_d1e5991c.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/jison.mjs":"chunks/jison_02048950.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/json5.mjs":"chunks/json5_e54cc5fc.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/jsonc.mjs":"chunks/jsonc_ef9dbafe.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/jsonl.mjs":"chunks/jsonl_3c64f7ee.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/jsonnet.mjs":"chunks/jsonnet_f75299d3.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/jssm.mjs":"chunks/jssm_62616b01.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/julia.mjs":"chunks/julia_f5200443.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/python.mjs":"chunks/python_061aa9fe.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/r.mjs":"chunks/r_b56421d0.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/kotlin.mjs":"chunks/kotlin_f8b1f9d8.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/kusto.mjs":"chunks/kusto_1c38d159.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/latex.mjs":"chunks/latex_aa903b74.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/tex.mjs":"chunks/tex_61ade2b7.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/rust.mjs":"chunks/rust_18efacce.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/scala.mjs":"chunks/scala_0e39458f.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/liquid.mjs":"chunks/liquid_3b0b6e49.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/lisp.mjs":"chunks/lisp_8f98aeda.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/logo.mjs":"chunks/logo_454c5a39.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/make.mjs":"chunks/make_2e432946.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/marko.mjs":"chunks/marko_b23c8b8c.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/matlab.mjs":"chunks/matlab_a6fe1b3f.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/mdc.mjs":"chunks/mdc_a46c073e.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/mdx.mjs":"chunks/mdx_c6231c2f.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/toml.mjs":"chunks/toml_69f7494a.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/objective-c.mjs":"chunks/objective-c_9a016530.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/perl.mjs":"chunks/perl_49bac0b3.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/shellsession.mjs":"chunks/shellsession_d2bd19f4.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/swift.mjs":"chunks/swift_f4081014.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/mermaid.mjs":"chunks/mermaid_4cf3ed5b.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/mojo.mjs":"chunks/mojo_ff8aa35e.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/narrat.mjs":"chunks/narrat_53434da9.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/nextflow.mjs":"chunks/nextflow_00751567.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/nginx.mjs":"chunks/nginx_44f59695.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/nim.mjs":"chunks/nim_a81b61db.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/nix.mjs":"chunks/nix_10f18d40.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/objective-cpp.mjs":"chunks/objective-cpp_0aace46b.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/ocaml.mjs":"chunks/ocaml_0db7b04e.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/pascal.mjs":"chunks/pascal_803439a8.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/php.mjs":"chunks/php_c96cb2e3.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/plsql.mjs":"chunks/plsql_73a7ae56.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/powerquery.mjs":"chunks/powerquery_377d20d1.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/powershell.mjs":"chunks/powershell_075a0e94.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/prisma.mjs":"chunks/prisma_b5acbc5e.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/prolog.mjs":"chunks/prolog_dd7eae5b.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/proto.mjs":"chunks/proto_497b8378.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/pug.mjs":"chunks/pug_cd13dfd8.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/puppet.mjs":"chunks/puppet_3134b183.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/purescript.mjs":"chunks/purescript_a41cb412.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/raku.mjs":"chunks/raku_2d15cbef.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/razor.mjs":"chunks/razor_ad0982ec.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/reg.mjs":"chunks/reg_ccf5cc29.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/rel.mjs":"chunks/rel_ab7c82ec.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/riscv.mjs":"chunks/riscv_e60aadbc.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/rst.mjs":"chunks/rst_31a9d763.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/sas.mjs":"chunks/sas_f6ff620b.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/scheme.mjs":"chunks/scheme_bc70ca41.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/shaderlab.mjs":"chunks/shaderlab_80558f3c.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/smalltalk.mjs":"chunks/smalltalk_855bbafc.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/solidity.mjs":"chunks/solidity_0fd83355.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/sparql.mjs":"chunks/sparql_d289ad62.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/turtle.mjs":"chunks/turtle_89a5bb82.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/splunk.mjs":"chunks/splunk_67ff664f.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/ssh-config.mjs":"chunks/ssh-config_f305ee4f.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/stata.mjs":"chunks/stata_bc0a7bfd.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/svelte.mjs":"chunks/svelte_1b06ef64.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/system-verilog.mjs":"chunks/system-verilog_b8fceb11.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/tasl.mjs":"chunks/tasl_0a1c4341.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/tcl.mjs":"chunks/tcl_36d679a3.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/twig.mjs":"chunks/twig_63f32014.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/v.mjs":"chunks/v_41bc1358.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/vb.mjs":"chunks/vb_0bef84f1.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/verilog.mjs":"chunks/verilog_45b6559c.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/vhdl.mjs":"chunks/vhdl_193bc0ed.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/viml.mjs":"chunks/viml_48c8610c.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/vue.mjs":"chunks/vue_5314a6ab.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/vue-html.mjs":"chunks/vue-html_2534baa6.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/vyper.mjs":"chunks/vyper_99d5408c.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/wasm.mjs":"chunks/wasm_c877243a.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/wenyan.mjs":"chunks/wenyan_c35eccc5.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/wgsl.mjs":"chunks/wgsl_c0ef6f1e.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/wolfram.mjs":"chunks/wolfram_d57196f9.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/xsl.mjs":"chunks/xsl_48ed27d2.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/zenscript.mjs":"chunks/zenscript_2040e2b4.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/langs/zig.mjs":"chunks/zig_9d57d985.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/onig.mjs":"chunks/onig_c22a8428.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/css-variables.mjs":"chunks/css-variables_05f06e1d.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/dark-plus.mjs":"chunks/dark-plus_be96313b.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/dracula.mjs":"chunks/dracula_22fc157d.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/dracula-soft.mjs":"chunks/dracula-soft_ab0a6f08.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/github-dark.mjs":"chunks/github-dark_45d4d058.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/github-dark-dimmed.mjs":"chunks/github-dark-dimmed_2886658b.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/github-light.mjs":"chunks/github-light_1abdeeba.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/hc_light.mjs":"chunks/hc_light_ffef9bf0.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/light-plus.mjs":"chunks/light-plus_bcde7cf1.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/material-theme.mjs":"chunks/material-theme_41561d92.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/material-theme-darker.mjs":"chunks/material-theme-darker_d5672c3c.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/material-theme-lighter.mjs":"chunks/material-theme-lighter_e72f5eac.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/material-theme-ocean.mjs":"chunks/material-theme-ocean_08b263c8.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/material-theme-palenight.mjs":"chunks/material-theme-palenight_cd9fed1f.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/min-dark.mjs":"chunks/min-dark_222484e0.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/min-light.mjs":"chunks/min-light_76cd360d.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/monokai.mjs":"chunks/monokai_18f70dba.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/nord.mjs":"chunks/nord_5cc6e909.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/one-dark-pro.mjs":"chunks/one-dark-pro_25b24aee.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/poimandres.mjs":"chunks/poimandres_67d1631f.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/rose-pine.mjs":"chunks/rose-pine_82cbccbd.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/rose-pine-dawn.mjs":"chunks/rose-pine-dawn_c3c73070.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/rose-pine-moon.mjs":"chunks/rose-pine-moon_eff88722.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/slack-dark.mjs":"chunks/slack-dark_b21eb9a6.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/slack-ochin.mjs":"chunks/slack-ochin_56e5a657.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/solarized-dark.mjs":"chunks/solarized-dark_1a2a5575.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/solarized-light.mjs":"chunks/solarized-light_98627b1b.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/vitesse-dark.mjs":"chunks/vitesse-dark_4889ca52.mjs","D:/Dev/MicroWebStacks/astro/astro-examples/00_website/node_modules/.pnpm/shikiji@0.6.13/node_modules/shikiji/dist/themes/vitesse-light.mjs":"chunks/vitesse-light_f49be883.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.e3fc264d.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
