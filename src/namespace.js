/**
 * Create namespaces specified by the first parameter. 
 * The second parameter determines de parent namespace where the the others will be created, default is window.
 *
 * Won't overwrite existing namespaces. Returns the reference.
 * 
 * @author Lucas Marçal dos Santos <lucasmarcaldossantos[at]gmail.com.br>
 * @param pNamespace namespace string 
 * @param pParent namespace initial. Default value is window
 * 
 * @return Obj
 */
function namespace(pParent, pNamespace, pValue)
{
    var pieces = "",
        parent = null,
        value = null;

    if (typeof pParent === "string")
    {
        pValue = pNamespace;
        pNamespace = pParent;
        pParent = window;
    }

    pieces = pNamespace.split(".");
    value = pValue || {};
    parent = pParent;
    

    for(var i = 0, length = pieces.length -1; i <= length; i++)
    {
        if (!!parent[pieces[i]] === false)
            parent = parent[pieces[i]] =  (i === length) ? value : {};
        else
            parent = parent[pieces[i]];
    }

    return parent;
}