# Como Adicionar um Novo Produto ao Site

## 1. Prepare a imagem

- Coloque a imagem na pasta `images/new_clothes/` com o nome contendo o preço (ex: `Produto Nome 99$.jpg`)
- Formatos aceitos: `.jpg`, `.jpeg`, `.webp`, `.avif` (sem extensão também funciona se for JPEG ou AVIF)

### Convertendo para JPG (obrigatório)

Use o `sips` do macOS para converter:

```bash
# webp → jpg
sips -s format jpeg "images/new_clothes/Nome do Produto 99$.webp" --out "images/feminino/marca/nome-produto.jpg"

# avif → jpg
sips -s format jpeg "images/new_clothes/Nome do Produto 99$.avif" --out "images/feminino/marca/nome-produto.jpg"

# arquivo sem extensão → jpg (verifique o tipo com `file nome-arquivo`)
sips -s format jpeg "images/new_clothes/Nome do Produto 99$" --out "images/feminino/marca/nome-produto.jpg"

# jpeg já pronto → copiar direto
cp "images/new_clothes/Nome do Produto 99$.jpeg" "images/feminino/marca/nome-produto.jpg"
```

## 2. Destino da imagem

Mova a imagem convertida para a pasta da marca correspondente:

| Gênero    | Pasta destino                         |
|-----------|---------------------------------------|
| Feminino  | `images/feminino/<marca>/`            |
| Masculino | `images/masculino/<marca>/`           |

Se a pasta da marca ainda não existir, crie:

```bash
mkdir -p images/feminino/nova-marca
```

Use nomes de arquivo em **kebab-case** (minúsculas, hífens):  
`marca-nome-produto-1.jpg`, `marca-nome-produto-2.jpg`

## 3. Calcule o preço

- **Preço de venda** = preço no nome do arquivo × 4 × 1,20
- **Preço original** (quando há desconto) = preço original no nome do arquivo × 4 × 1,20

Exemplos:
| Preço fonte | Preço de venda (R$) |
|-------------|---------------------|
| $54         | 54 × 4 × 1,2 = **R$ 259,20** |
| $99,60      | 99,60 × 4 × 1,2 = **R$ 478,08** |
| $130 (orig) | 130 × 4 × 1,2 = **R$ 624,00** |

## 4. Adicione o produto em `main.js`

Localize o bloco de produtos (busque por `const PRODUCTS = [`) e adicione um novo objeto **antes** do `];` final. Use o próximo ID disponível (verifique o último ID no arquivo).

### Estrutura do produto

```javascript
{
  id: 285,                          // próximo ID disponível
  brand: 'Nome da Marca',           // deve constar em BRANDS_BY_GENDER
  gender: 'feminino',               // 'feminino' ou 'masculino'
  tags: ['acessorio'],              // veja tags disponíveis abaixo
  price: 259.20,                    // preço de venda em R$
  // originalPrice: 432.00,         // adicione apenas se houver preço antigo
  name: 'Nome do Produto',
  images: [
    'feminino/marca/marca-nome-produto-1.jpg',
    'feminino/marca/marca-nome-produto-2.jpg',  // opcional: segunda imagem
  ],
  description: 'Descrição detalhada do produto com detalhes de material, cor e diferenciais.',
},
```

### Tags disponíveis

| Tag          | Categoria exibida  |
|--------------|--------------------|
| `polo`       | Polos              |
| `moletom`    | Moletons           |
| `conjunto`   | Conjuntos          |
| `calca`      | Calças             |
| `short`      | Shorts             |
| `tenis`      | Tênis              |
| `sport`      | Lacoste Sport      |
| `camiseta`   | Camisetas          |
| `acessorio`  | Acessórios         |
| `fragrance`  | Fragrâncias        |
| `calcinha`   | Lingerie           |
| `pijama`     | Pijamas            |

## 5. Adicione a marca aos filtros (se for nova)

Em `main.js`, localize `BRANDS_BY_GENDER` e adicione a marca na lista correta:

```javascript
const BRANDS_BY_GENDER = {
  masculino: [..., 'Nova Marca Masc'],
  feminino:  [..., 'Nova Marca Fem'],
};
```

> O nome aqui deve ser **idêntico** ao campo `brand` do produto.

## 6. Produto esgotado

Para marcar um produto como vendido, adicione `sold: true`:

```javascript
{
  id: 285,
  sold: true,
  // ... restante dos campos
}
```

## 7. Commit

```bash
git add images/feminino/marca/ images/masculino/marca/ main.js
git commit -m "feat: adiciona [Nome do Produto] — [Marca]"
```
