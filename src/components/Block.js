import FaqBlock from "./blocks/FaqBlock";

export default function Block({block}) {

   
    const blockAttributes = JSON.parse(block.attributesJSON);
    const name = blockAttributes.name;

    switch(name) {
        case "acf/faq":
            return <FaqBlock attr={blockAttributes}/>
    }

    return (
        <p>Undefined Block</p>
    )

}