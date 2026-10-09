# "Ricing" Linux

<div style="display: flex; align-items: center; justify-content: space-between;">
    <img src="assets/tux.svg" style="float: right;margin-left: 1em;width: 256px;"/>
        <div align="center">
            ou : Comment<br/> une palette de couleurs <br/>a changé ma manière<br/> d'utiliser un ordinateur
        </div>
    <img src="catppuccin_255.png" style="float: left;margin-right: 1em;width: 256px;"/>
</div>


Notes:
Speaker notes


## Intro


## Partie 1


```mermaid
classDiagram
  class Customer {
    +String name
    +String email
  }
  class Order {
    +String id
    +Date placedAt
    +total() Money
  }
  class LineItem {
    +int quantity
  }
  class Payment {
    <<interface>>
    +authorise() bool
  }
  Customer "1" --> "*" Order : places
  Order "1" *-- "*" LineItem : contains
  Order --> Payment : settled by
```


```mermaid
erDiagram
          CUSTOMER }|..|{ DELIVERY-ADDRESS : has
          CUSTOMER ||--o{ ORDER : places
          CUSTOMER ||--o{ INVOICE : "liable for"
          DELIVERY-ADDRESS ||--o{ ORDER : receives
          INVOICE ||--|{ ORDER : covers
          ORDER ||--|{ ORDER-ITEM : includes
          PRODUCT-CATEGORY ||--|{ PRODUCT : contains
          PRODUCT ||--o{ ORDER-ITEM : "ordered in"
```


```mermaid
graph TD
    A[Enter Chart Definition] --> B(Preview)
    B --> C{decide}
    C --> D[Keep]
    C --> E[Edit Definition]
    E --> B
    D --> F[Save Image and Code]
    F --> B
```
