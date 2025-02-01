;; Honey Token Contract
(define-fungible-token honey)

;; Constants
(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u401))

;; Token info
(define-data-var token-name (string-ascii 32) "Honey Token")
(define-data-var token-symbol (string-ascii 10) "HONEY")

;; Public functions
(define-public (mint (amount uint) (recipient principal))
  (begin
    (asserts! (is-eq tx-sender contract-owner) err-owner-only)
    (ft-mint? honey amount recipient)
  )
)

(define-public (transfer (amount uint) (recipient principal))
  (ft-transfer? honey amount tx-sender recipient)
)
