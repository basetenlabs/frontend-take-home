import Fuse from 'fuse.js';

const MODELS = [
  {
    "id": "gpt2",
    "modified": 1621441559000,
    "type": "text-generation"
  },
  {
    "id": "gpt2-large",
    "modified": 1631115866000,
    "type": "text-generation"
  },
  {
    "id": "EleutherAI/gpt-neo-2.7B",
    "author": "EleutherAI",
    "modified": 1631384785000,
    "type": "text-generation"
  },
  {
    "id": "xlnet-base-cased",
    "modified": 1631785438000,
    "type": "text-generation"
  },
  {
    "id": "gpt2-medium",
    "modified": 1621588677000,
    "type": "text-generation"
  },
  {
    "id": "EleutherAI/gpt-neo-1.3B",
    "author": "EleutherAI",
    "modified": 1631384815000,
    "type": "text-generation"
  },
  {
    "id": "distilgpt2",
    "modified": 1621588546000,
    "type": "text-generation"
  },
  {
    "id": "gpt2-xl",
    "modified": 1631115911000,
    "type": "text-generation"
  },
  {
    "id": "Vamsi/T5_Paraphrase_Paws",
    "author": "Vamsi",
    "modified": 1624448391000,
    "type": "text-generation"
  },
  {
    "id": "google/reformer-crime-and-punishment",
    "author": "google",
    "modified": 1612202018000,
    "type": "text-generation"
  },
  {
    "id": "EleutherAI/gpt-neo-125M",
    "author": "EleutherAI",
    "modified": 1631385238000,
    "type": "text-generation"
  },
  {
    "id": "openai-gpt",
    "modified": 1607538594000,
    "type": "text-generation"
  },
  {
    "id": "sshleifer/tiny-gpt2",
    "author": "sshleifer",
    "modified": 1621774511000,
    "type": "text-generation"
  },
  {
    "id": "transfo-xl-wt103",
    "modified": 1607538599000,
    "type": "text-generation"
  },
  {
    "id": "EleutherAI/gpt-j-6B",
    "author": "EleutherAI",
    "modified": 1632324618000,
    "type": "text-generation"
  },
  {
    "id": "skt/kogpt2-base-v2",
    "author": "skt",
    "modified": 1632414568000,
    "type": "text-generation"
  },
  {
    "id": "uer/gpt2-chinese-cluecorpussmall",
    "author": "uer",
    "modified": 1621776070000,
    "type": "text-generation"
  },
  {
    "id": "remotejob/tweetsDISTILGPT2fi_v2",
    "author": "remotejob",
    "modified": 1630279121000,
    "type": "text-generation"
  },
  {
    "id": "xlnet-large-cased",
    "modified": 1631785520000,
    "type": "text-generation"
  },
  {
    "id": "rinna/japanese-gpt2-medium",
    "author": "rinna",
    "modified": 1629688817000,
    "type": "text-generation"
  },
  {
    "id": "flax-community/gpt2-medium-persian",
    "author": "flax-community",
    "modified": 1626440468000,
    "type": "text-generation"
  },
  {
    "id": "colorfulscoop/gpt2-small-ja",
    "author": "colorfulscoop",
    "modified": 1632743417000,
    "type": "text-generation"
  },
  {
    "id": "skt/ko-gpt-trinity-1.2B-v0.5",
    "author": "skt",
    "modified": 1632414565000,
    "type": "text-generation"
  },
  {
    "id": "hfl/chinese-xlnet-base",
    "author": "hfl",
    "modified": 1614735899000,
    "type": "text-generation"
  },
  {
    "id": "sberbank-ai/rugpt3small_based_on_gpt2",
    "author": "sberbank-ai",
    "modified": 1632252641000,
    "type": "text-generation"
  },
  {
    "id": "sberbank-ai/rugpt3large_based_on_gpt2",
    "author": "sberbank-ai",
    "modified": 1632252789000,
    "type": "text-generation"
  },
  {
    "id": "dbmdz/german-gpt2",
    "author": "dbmdz",
    "modified": 1629188331000,
    "type": "text-generation"
  },
  {
    "id": "sshleifer/tiny-ctrl",
    "author": "sshleifer",
    "modified": 1589412108000,
    "type": "text-generation"
  },
  {
    "id": "antoiloui/belgpt2",
    "author": "antoiloui",
    "modified": 1621603315000,
    "type": "text-generation"
  },
  {
    "id": "microsoft/CodeGPT-small-py-adaptedGPT2",
    "author": "microsoft",
    "modified": 1621760440000,
    "type": "text-generation"
  },
  {
    "id": "valhalla/distilbart-mnli-12-3",
    "author": "valhalla",
    "modified": 1623666588000,
    "type": "zero-shot-classification"
  },
  {
    "id": "facebook/bart-large-mnli",
    "author": "facebook",
    "modified": 1628497507000,
    "type": "zero-shot-classification"
  },
  {
    "id": "vicgalle/xlm-roberta-large-xnli-anli",
    "author": "vicgalle",
    "modified": 1614877503000,
    "type": "zero-shot-classification"
  },
  {
    "id": "valhalla/distilbart-mnli-12-6",
    "author": "valhalla",
    "modified": 1623666723000,
    "type": "zero-shot-classification"
  },
  {
    "id": "typeform/distilbert-base-uncased-mnli",
    "author": "typeform",
    "modified": 1622109200000,
    "type": "zero-shot-classification"
  },
  {
    "id": "joeddav/xlm-roberta-large-xnli",
    "author": "joeddav",
    "modified": 1608223147000,
    "type": "zero-shot-classification"
  },
  {
    "id": "joeddav/bart-large-mnli-yahoo-answers",
    "author": "joeddav",
    "modified": 1623667473000,
    "type": "zero-shot-classification"
  },
  {
    "id": "BaptisteDoyen/camembert-base-xnli",
    "author": "BaptisteDoyen",
    "modified": 1617891115000,
    "type": "zero-shot-classification"
  },
  {
    "id": "Sahajtomar/German_Zeroshot",
    "author": "Sahajtomar",
    "modified": 1621376538000,
    "type": "zero-shot-classification"
  },
  {
    "id": "valhalla/distilbart-mnli-12-1",
    "author": "valhalla",
    "modified": 1623666475000,
    "type": "zero-shot-classification"
  },
  {
    "id": "typeform/mobilebert-uncased-mnli",
    "author": "typeform",
    "modified": 1613293860000,
    "type": "zero-shot-classification"
  },
  {
    "id": "Recognai/bert-base-spanish-wwm-cased-xnli",
    "author": "Recognai",
    "modified": 1634313315000,
    "type": "zero-shot-classification"
  },
  {
    "id": "valhalla/distilbart-mnli-12-9",
    "author": "valhalla",
    "modified": 1623666898000,
    "type": "zero-shot-classification"
  },
  {
    "id": "cross-encoder/nli-distilroberta-base",
    "author": "cross-encoder",
    "modified": 1628152859000,
    "type": "zero-shot-classification"
  },
  {
    "id": "Narsil/deberta-large-mnli-zero-cls",
    "author": "Narsil",
    "modified": 1629725244000,
    "type": "zero-shot-classification"
  },
  {
    "id": "typeform/roberta-large-mnli",
    "author": "typeform",
    "modified": 1621550971000,
    "type": "zero-shot-classification"
  },
  {
    "id": "cross-encoder/nli-roberta-base",
    "author": "cross-encoder",
    "modified": 1628152865000,
    "type": "zero-shot-classification"
  },
  {
    "id": "cross-encoder/nli-deberta-base",
    "author": "cross-encoder",
    "modified": 1628152853000,
    "type": "zero-shot-classification"
  },
  {
    "id": "digitalepidemiologylab/covid-twitter-bert-v2-mnli",
    "author": "digitalepidemiologylab",
    "modified": 1632298804000,
    "type": "zero-shot-classification"
  },
  {
    "id": "cross-encoder/nli-MiniLM2-L6-H768",
    "author": "cross-encoder",
    "modified": 1628152839000,
    "type": "zero-shot-classification"
  },
  {
    "id": "typeform/squeezebert-mnli",
    "author": "typeform",
    "modified": 1613245291000,
    "type": "zero-shot-classification"
  },
  {
    "id": "cointegrated/rubert-base-cased-nli-threeway",
    "author": "cointegrated",
    "modified": 1633864167000,
    "type": "zero-shot-classification"
  },
  {
    "id": "cointegrated/rubert-base-cased-nli-twoway",
    "author": "cointegrated",
    "modified": 1633864095000,
    "type": "zero-shot-classification"
  },
  {
    "id": "navteca/bart-large-mnli",
    "author": "navteca",
    "modified": 1628602392000,
    "type": "zero-shot-classification"
  },
  {
    "id": "seduerr/paiintent",
    "author": "seduerr",
    "modified": 1616217617000,
    "type": "zero-shot-classification"
  },
  {
    "id": "cointegrated/rubert-tiny-bilingual-nli",
    "author": "cointegrated",
    "modified": 1633853839000,
    "type": "zero-shot-classification"
  },
  {
    "id": "lighteternal/nli-xlm-r-greek",
    "author": "lighteternal",
    "modified": 1632240102000,
    "type": "zero-shot-classification"
  },
  {
    "id": "Recognai/zeroshot_selectra_medium",
    "author": "Recognai",
    "modified": 1634657144000,
    "type": "zero-shot-classification"
  },
  {
    "id": "Recognai/zeroshot_selectra_small",
    "author": "Recognai",
    "modified": 1634657167000,
    "type": "zero-shot-classification"
  },
  {
    "id": "osanseviero/test_zero",
    "author": "osanseviero",
    "modified": 1634109058000,
    "type": "zero-shot-classification"
  },
  {
    "id": "facebook/detr-resnet-50",
    "author": "facebook",
    "modified": 1632816005000,
    "type": "object-detection"
  },
  {
    "id": "facebook/detr-resnet-101-dc5",
    "author": "facebook",
    "modified": 1623162025000,
    "type": "object-detection"
  },
  {
    "id": "facebook/detr-resnet-101",
    "author": "facebook",
    "modified": 1623161821000,
    "type": "object-detection"
  },
  {
    "id": "facebook/detr-resnet-50-dc5",
    "author": "facebook",
    "modified": 1623161342000,
    "type": "object-detection"
  },
  {
    "id": "nateraw/hot-dog",
    "author": "nateraw",
    "modified": 1625117478000,
    "type": "object-detection"
  },
  {
    "id": "Riser/YOLOP",
    "author": "Riser",
    "modified": 1631264914000,
    "type": "object-detection"
  },
  {
    "id": "aychang/fasterrcnn-resnet50-cpu",
    "author": "aychang",
    "modified": 1611563389000,
    "type": "object-detection"
  },
  {
    "id": "google/vit-base-patch16-224",
    "author": "google",
    "modified": 1631562747000,
    "type": "image-classification"
  },
  {
    "id": "facebook/deit-base-distilled-patch16-224",
    "author": "facebook",
    "modified": 1633355176000,
    "type": "image-classification"
  },
  {
    "id": "microsoft/beit-base-patch16-224-pt22k-ft22k",
    "author": "microsoft",
    "modified": 1631538324000,
    "type": "image-classification"
  },
  {
    "id": "google/vit-large-patch16-224",
    "author": "google",
    "modified": 1623334662000,
    "type": "image-classification"
  },
  {
    "id": "microsoft/beit-base-patch16-224",
    "author": "microsoft",
    "modified": 1631538899000,
    "type": "image-classification"
  },
  {
    "id": "microsoft/beit-base-patch16-224-pt22k",
    "author": "microsoft",
    "modified": 1631539273000,
    "type": "image-classification"
  },
  {
    "id": "facebook/deit-tiny-patch16-224",
    "author": "facebook",
    "modified": 1617992875000,
    "type": "image-classification"
  },
  {
    "id": "microsoft/beit-base-patch16-384",
    "author": "microsoft",
    "modified": 1631539573000,
    "type": "image-classification"
  },
  {
    "id": "facebook/deit-base-patch16-224",
    "author": "facebook",
    "modified": 1617992635000,
    "type": "image-classification"
  },
  {
    "id": "facebook/deit-small-patch16-224",
    "author": "facebook",
    "modified": 1617992840000,
    "type": "image-classification"
  },
  {
    "id": "nateraw/keras-cats-vs-dogs",
    "author": "nateraw",
    "modified": 1633619569000,
    "type": "image-classification"
  },
  {
    "id": "google/vit-base-patch32-384",
    "author": "google",
    "modified": 1623333877000,
    "type": "image-classification"
  },
  {
    "id": "nateraw/vit-base-patch16-224-cifar10",
    "author": "nateraw",
    "modified": 1617571715000,
    "type": "image-classification"
  },
  {
    "id": "google/vit-base-patch16-384",
    "author": "google",
    "modified": 1623333782000,
    "type": "image-classification"
  },
  {
    "id": "microsoft/beit-large-patch16-224-pt22k-ft22k",
    "author": "microsoft",
    "modified": 1631539478000,
    "type": "image-classification"
  },
  {
    "id": "facebook/deit-tiny-distilled-patch16-224",
    "author": "facebook",
    "modified": 1617992855000,
    "type": "image-classification"
  },
  {
    "id": "nateraw/vit-age-classifier",
    "author": "nateraw",
    "modified": 1621825741000,
    "type": "image-classification"
  },
  {
    "id": "facebook/deit-base-distilled-patch16-384",
    "author": "facebook",
    "modified": 1617992611000,
    "type": "image-classification"
  },
  {
    "id": "facebook/deit-small-distilled-patch16-224",
    "author": "facebook",
    "modified": 1617992590000,
    "type": "image-classification"
  },
  {
    "id": "nateraw/quickdraw-model",
    "author": "nateraw",
    "modified": 1633904514000,
    "type": "image-classification"
  },
  {
    "id": "google/vit-large-patch32-384",
    "author": "google",
    "modified": 1623335137000,
    "type": "image-classification"
  },
  {
    "id": "microsoft/beit-large-patch16-512",
    "author": "microsoft",
    "modified": 1631539929000,
    "type": "image-classification"
  },
  {
    "id": "osanseviero/keras-dog-or-cat",
    "author": "osanseviero",
    "modified": 1625751409000,
    "type": "image-classification"
  },
  {
    "id": "timm/eca_nfnet_l0",
    "author": "timm",
    "modified": 1631039759000,
    "type": "image-classification"
  },
  {
    "id": "microsoft/beit-large-patch16-224-pt22k",
    "author": "microsoft",
    "modified": 1631539708000,
    "type": "image-classification"
  },
  {
    "id": "espejelomar/fastai-pet-breeds-classification",
    "author": "espejelomar",
    "modified": 1634043686000,
    "type": "image-classification"
  },
  {
    "id": "sgugger/resnet50d",
    "author": "sgugger",
    "modified": 1613644308000,
    "type": "image-classification"
  },
  {
    "id": "nateraw/vit-base-cats-vs-dogs",
    "author": "nateraw",
    "modified": 1630440128000,
    "type": "image-classification"
  },
  {
    "id": "nateraw/keras-mnist-convnet-demo",
    "author": "nateraw",
    "modified": 1633451714000,
    "type": "image-classification"
  },
  {
    "id": "osanseviero/fastai_cat_vs_dog",
    "author": "osanseviero",
    "modified": 1632402107000,
    "type": "image-classification"
  }
];

const fuse = new Fuse(MODELS, {
  keys: ['id', 'author', 'type']
})

function search(term) {
  return fuse.search(term);
}

export {
  search
};