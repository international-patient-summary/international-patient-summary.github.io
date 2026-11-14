# 国際患者サマリー（IPS）

**国際患者サマリー（International Patient Summary、IPS）** は、電子健康記録の短い抜粋に関する世界標準です。臨床医が患者を安全に治療するために必要な、基本的な臨床情報を収めています。次のような特徴を持つよう設計されています。

- **最小限で網羅的ではない。** 健康記録全体ではなく、厳選された小さな部分集合です。
- **診療科を問わない。** どの診療科の臨床医でも利用できます。
- **疾患に依存しない。** 特定の疾患や診療経路に縛られません。
- **実装可能で国際的。** 世界共通の標準と用語体系の上に構築されているため、国、言語、ITシステムを越えて利用できます。

要するに、IPS は患者に会ったことのない臨床医に対して、次の一つの問いに答えます。*「この人を安全に診るために、今すぐ何を知っておく必要があるか。」*


## IPS が存在する理由

健康情報は通常、地域の電子健康記録（EHR）、国のシステム、またはベンダーの製品の中に閉じ込められています。患者が別の病院、地域、国などで診療を受けるとき、診る側の臨床医はその履歴にアクセスできないことがよくあります。IPS は、誰もが共有でき、持ち運べる一つのサマリー形式を提供します。

### 主なユースケース

| ユースケース | 説明 |
|---|---|
| **予定外・救急医療** | 患者が自宅から離れた場所で病気やけがをし、現地の臨床医が患者の母国の EHR にアクセスできない場合。これが本来の主要なユースケースです。 |
| **国境を越える医療** | 旅行者、移民、越境労働者、難民が、外国の臨床医が読めるサマリーを携行します。 |
| **計画的な医療と移行** | 紹介、専門医への相談、入院、退院、提供者間の引き継ぎ。 |
| **医療ツーリズムと移動** | 別の法域で医療を受けることを選ぶ患者。 |
| **患者のエンパワーメント** | 患者が自分のサマリーを、スマートフォンアプリ、ポータル、または印刷物で保持、閲覧、共有します。 |


## IPS を使う場面

患者を知らない人が信頼できる概要をすばやく必要とするとき、また送信側と受信側が ITシステムを共有していないときに、IPS を使います。

### 適している場面

- **救急および予定外の医療**、特に自宅から離れた場所や国境を越えた場合。IPS はこの用途のために設計されました。
- **国のシステム間での越境交換**。たとえば EU の MyHealth@EU サービス [[1]](#ref-1) [[2]](#ref-2)。
- **患者が保持するサマリー**。旅行者、移民、難民、巡礼者、複雑な病状のある人が、スマートフォンや紙で携行します [[3]](#ref-3)。
- **国や地域の患者サマリー。** 多くの国が自国のサマリーを IPS のプロファイルとして構築しており、国際的にも交換できます [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6)。
- **医療の移行における共通の基盤**。より豊富な専門文書がない場合の、紹介、入院、退院など。
- **他のデータセットの出発点**。予防接種証明書、研究データ、同じ中核情報を必要とするレジストリなど [[7]](#ref-7) [[8]](#ref-8)。

### 適していない場面

- **完全な診療記録。** IPS は意図的に最小限です。詳細が重要な場合は、完全な記録のエクスポートまたは専門文書を使ってください。
- **診療科固有の文書**。腫瘍治療サマリー、母子手帳のような記録、詳細な退院サマリーなど。これらには独自の標準があり、IPS の内容を含めたり参照したりできます。
- **単一組織内でのリアルタイムの臨床ワークフロー。** 1つの EHR の中では、サマリーのスナップショットではなく、ライブデータを照会してください。
- **法的、請求、保険の記録。** IPS は臨床サマリーであり、事務的な記録や請求記録ではありません。
- **完全性の保証が必要な判断。** IPS の完全性と新しさは、情報源と作成者次第です。可能な限り、重要な事実は常に患者本人に確認してください。


## IPS の内容

IPS 文書は2つの層から成ります。

1. **誰が、何を、いつ記録したかを示すヘッダー：**
   - **患者：** 身元、人口統計、連絡先。
   - **作成者：** サマリーを作成した人、組織、またはシステム。
   - **保管者（custodian）：** 維持管理に責任を持つ組織。
   - **認証者（attester）：** 検証した人（いる場合）。
   - **日時：** 作成された日時。

2. **セクションで構成された臨床本文。** セクションは必須、推奨、任意に分かれます。

| セクション | 区分 | 典型的な内容 |
|---|---|---|
| **薬剤サマリー** | 必須 | 現在および関連する過去の薬剤、処方、用量 |
| **アレルギーと不耐性** | 必須 | 薬剤、食物、環境のアレルギー、反応と重症度 |
| **問題リスト** | 必須 | 活動中の診断、病状、臨床上の問題 |
| 予防接種 | 推奨 | 接種済みのワクチン。破傷風、B型肝炎、インフルエンザ、COVID-19 など |
| 処置歴 | 推奨 | 大きな手術と侵襲的な介入 |
| 医療機器 | 推奨 | 埋め込み物と機器。ペースメーカー、ステント、人工器官など |
| 診断結果 | 推奨 | 主要な検査結果、画像レポート、病理 |
| バイタルサイン | 任意 | 血圧、心拍数、体重、身長、BMI |
| 既往歴 | 任意 | 治癒した病状と過去の重要な問題 |
| 機能状態 | 任意 | 障害と日常生活動作の遂行能力 |
| ケアプラン | 任意 | ケアプランと治療の推奨 |
| 社会歴 | 任意 | たばこ、アルコール、その他の関連する生活習慣要因 |
| 妊娠歴 | 任意 | 現在の妊娠状態と妊娠歴 |
| 事前指示 | 任意 | リビングウィル、蘇生に関する希望、同意の表明 |
| アラート | 任意 | 他に当てはまらない安全上重要な警告（FHIR IPS STU 2 で追加） |
| 患者のストーリー | 任意 | 患者にとって大切なこと。ニーズ、強み、価値観、懸念、希望を、患者自身の言葉で（FHIR IPS STU 2 で追加） |

**「何もない」とはっきり書くことが重要です。** 空のセクションでは、アレルギーがないのか、誰も記録していないのかが臨床医には分かりません。そのため IPS は、*「既知のアレルギーなし」*、*「現在の薬剤なし」*、*「情報なし」* のような明示的な記述を求めています。


## IPS を支える標準

IPS は、連携した標準のファミリーです。ISO と CEN の標準は、患者サマリーが*何を*含むべきかを定義します。HL7 の実装ガイドは、それを*どのように*符号化するかを定義します。

| 標準 | 団体 | 役割 |
|---|---|---|
| **EN 17269** | CEN（欧州標準化委員会） | 抽象的な IPS データセット。2019年発行 |
| **ISO 27269** | ISO（国際標準化機構） | 抽象的な IPS データセットの国際版。2021年発行 |
| **CEN/TS 17288** | CEN | 越境利用に向けた IPS 実装のガイダンス |
| **HL7 FHIR IPS 実装ガイド** | HL7 International | 現代的で API に適した符号化であり、主要な実装形式。STU 2（2.0.x）では、アラートと患者のストーリーのセクションを追加し、空のセクションを許可し、`$summary` を明確化し、SNOMED CT IPS 用語体系へ移行しました [[9]](#ref-9)。 |
| **HL7 CDA IPS 実装ガイド** | HL7 International | XML 文書ベースの符号化。既存の国や欧州の基盤で一般的 |

この作業は、**世界保健情報標準化共同イニシアチブ評議会（Joint Initiative Council for Global Health Informatics Standardization、JIC）** を通じて調整されています。JIC には ISO、CEN、HL7、SNOMED International、IHE などが集まっています。IPS は、越境の健康データに関する2016年の EU と米国の協力から生まれ、現在は世界各国の政府やデジタルヘルスのプログラムに支持されています。


## HL7 FHIR での IPS の符号化

FHIR では、IPS は `document` 型の単一の **`Bundle`** です。

```
Bundle (type = document)
├── Composition   ← the "table of contents": header + sections
│     type = LOINC 60591-5 "Patient summary Document"
│     section: Medication Summary   (LOINC 10160-0)
│     section: Allergies            (LOINC 48765-2)
│     section: Problem List         (LOINC 11450-4)
│     section: ...
├── Patient
├── Practitioner / Organization     (author, custodian, attester)
├── MedicationStatement / MedicationRequest + Medication
├── AllergyIntolerance
├── Condition
├── Immunization, Procedure, DeviceUseStatement, Observation, ...
└── ...
```

主な技術的ポイント：

- **各セクションに人が読める叙述がある。** 臨床医は、FHIR ソフトウェアがなくても、通常のブラウザで IPS を読めます。
- **各セクションにはコード化されたエントリもある。** これはソフトウェアが処理、翻訳、突合できる構造化された FHIR リソースです。
- **プロファイルが基本の FHIR リソースを制約する。** たとえば *Patient (IPS)* と *AllergyIntolerance (IPS)* は、最小限のデータと「must support」要素を定義します。
- **`$summary` 操作**（`GET [base]/Patient/[id]/$summary`）は、FHIR サーバーに、患者の IPS をオンデマンドで生成するよう要求します。
- **IPS は署名可能で自己完結している。** 完全な文書を、1つの単位として保存、送信、署名、検証できます。


## 用語体系

共有されたコード体系により、IPS は言語や国を越えて読めるようになります。

| 用語体系 | 用途 |
|---|---|
| **SNOMED CT** | 問題、アレルギー、処置、機器、臨床所見。IPS で使える無償の部分集合 **SNOMED CT IPS 用語体系** があり、非会員国でも利用できます。 |
| **LOINC** | 文書とセクションの種類、臨床検査、バイタルサイン |
| **ATC** などの薬剤コード体系 | 医薬品と有効成分 |
| **UCUM** | 測定単位 |
| **ISO と HL7 のバリューセット** | 国、言語、行政上の性別、欠如や不明の理由 |

エントリがコード化されているため、受信システムは、ポルトガル語で書かれた IPS を英語のラベルで表示できます。コード化された意味は変わりません。


## 患者と臨床医による IPS の使い方

IPS は、EHR、国の健康記録サービス、患者ポータル、個人向けヘルスアプリで作成できます。その後、いくつかの方法で届けられます。

- **システム間：** FHIR REST API、国の基盤、EU の MyHealth@EU ネットワークのような越境ゲートウェイを介して。
- **患者を介した共有：** 患者がサマリーをウォレットやヘルスアプリに保持し、求めに応じて共有します。
- **SMART Health Links：** 暗号化された IPS への、時間制限付きで、任意でパスコード保護された臨床医のアクセスを与える QR コードまたは URL。臨床医は通常の Web ブラウザで開けます。
- **紙または PDF：** 他に何も使えないときの代替としての、印刷された叙述表示。

**CommonHealth** のようなアプリでは、患者が自分の記録を集め、SMART Health Links を通じて IPS を共有できます。

典型的な救急の場面：

1. 旅行者が海外で倒れます。
2. 旅行者または同行者が、スマートフォンの QR コードを見せます。
3. 救急医がそれをスキャンし、数秒で旅行者の薬剤、アレルギー、活動中の問題を確認します。
4. 医師は危険な薬剤相互作用を避け、安全に患者を治療します。


## 原則と設計上の選択

- **安全第一。** 内容は、網羅性ではなく臨床的な関連性で選ばれます。
- **既定はグローバル、拡張でローカル。** 各国は、EU、オーストラリア、カナダ版のような国別プロファイルを作成し、国際的な中核を壊さずに要件を追加します。
- **人が読め、機械が処理できる。** 叙述とコード化データが共存します。
- **無償でオープン。** HL7 IPS 仕様と IPS の SNOMED CT 部分集合は、導入の障壁を下げるために無償で提供されています。
- **プライバシーと同意。** アクセスは、現地の法律と患者の同意によって管理されます。SMART Health Links のような仕組みが、患者に主導権を保たせます。


## IPS の使い方

### 患者向け

1. **作成を依頼する。** かかりつけの診療所、病院、国の健康ポータル、ヘルスアプリに、IPS またはそれに基づく国の患者サマリーを作成できるか尋ねてください。
2. **内容を確認する。** 健康なうちに読んでください。誤りや不足、特にアレルギーと薬剤について、報告してください。
3. **常に携行する。** ヘルスアプリやウォレットに、SMART Health Link の QR コードとして、または旅行書類と一緒に印刷物として保管してください。
4. **最新に保つ。** 新しい診断、新しい長期薬、手術、埋め込み物のあとには、新しいものを入手してください。
5. **意図して共有する。** 治療にあたる臨床医に見せてください。SMART Health Link には有効期限を設けたりパスコードを求めたりできるため、誰がどれくらいの期間見られるかを自分で管理できます [[10]](#ref-10)。

### 臨床医向け

1. **まずヘッダーを確認する。** 誰が、いつ書いたか、そして誰かが検証したか。古い、または未検証のサマリーには、より慎重さが必要です。
2. **まず必須セクションを読む：** アレルギー、薬剤、問題。
3. **「既知なし」と「記録なし」を区別する。** 「既知のアレルギーなし」は臨床的な記述です。空または「不明」のセクションはそうではありません。
4. **重要な事実は確認する。** 可能なときはいつでも、患者または同行者に。
5. **コード化データを使う。** お使いのシステムが対応していれば、コード化されたエントリにより、サマリーを自分の言語で表示し、薬剤相互作用やアレルギーのルールと照合できます。
6. **網羅されていると思い込まない。** IPS はセーフティネットであり、完全な病歴ではありません。

### 実装者向け

1. **仕様を選ぶ。** 現行の HL7 FHIR IPS 実装ガイド（STU 2）、またはそれに基づく自国の国別プロファイルを使います。CDA ベースの基盤には CDA IPS ガイドを使います [[9]](#ref-9) [[11]](#ref-11)。
2. **データをマッピングする。** ローカルのデータを IPS のプロファイル（`Patient`、`AllergyIntolerance`、`MedicationStatement`、`Condition` など）にマッピングします。作業の大半はこのマッピングです。
3. **用語をマッピングする。** ローカルコードを SNOMED CT、LOINC、薬剤コード体系にマッピングします。SNOMED CT IPS 用語体系は、この目的には無償で使えます [[12]](#ref-12)。
4. **文書を生成する。** `$summary` 操作に対応するか、`Bundle` と `Composition` を自分で構築します。すべてのセクションに読みやすい叙述と、明示的な「既知なし」または「情報なし」の記述を含めます。
5. **検証する。** 生成したすべての文書を、FHIR Validator と、Inferno IPS Test Kit のような適合性テストキットで確認します [[13]](#ref-13)。
6. **署名して共有する。** 文書をどう署名、保存、送信するかを決めます。API、文書レジストリ、越境ゲートウェイ、または SMART Health Link です。
7. **安全に取り込む。** 受信側として、すべてのコード化エントリを処理できなくても叙述を表示し、情報源と作成者を見える状態に保ち、受け取ったデータを黙ってローカルの記録に統合しないでください。
8. **他者と試験する。** 本番稼働の前に、IHE と HL7 の Connectathon で他のベンダーや国と相互運用を確認してください。

### 政府・保健機関向け

1. **別形式ではなく IPS を土台とした国別プロファイルを採用する。** これにより、国のサマリーが初めから国際的になります [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6)。
2. **ガバナンスを定める：** 誰がサマリーを作成、更新、認証できるか、誰がその正確性に責任を持つか。
3. **用語体系のライセンスを定める：** SNOMED CT の会員資格、または無償の IPS 部分集合の利用。
4. **身元、同意、信頼を定める：** 患者をどう識別し、同意をどう記録し、文書を検証するためにどの信頼フレームワーク（MyHealth@EU や WHO グローバルデジタルヘルス認証ネットワークなど）を使うか [[1]](#ref-1) [[14]](#ref-14)。
5. **構築したものを公開する。** IPS 実装レジストリに掲載して、他の人が学べるようにします [[15]](#ref-15)。


## IPS と医療システムの統合

IPS が独立したシステムになることはまれです。それは、EHR、医療情報交換、国の記録、個人向けヘルスアプリにすでにあるデータのビューです。

| 統合パターン | 仕組み | 例 |
|---|---|---|
| **EHR による生成** | EHR が、要求に応じて自らのデータから IPS を構築します。多くは FHIR の `$summary` 操作を介します。 | EHR ベンダー、IPS 生成モジュールを持つ HAPI FHIR のような FHIR サーバー |
| **国または地域の記録** | 国の患者サマリーサービスが IPS のプロファイルを保存し、認可された提供者に提供します。 | カナダの PS-CA、オーストラリアの AU Patient Summary、CH IPS を用いたスイスの電子患者記録 [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) |
| **越境ゲートウェイ** | 各国が国の連絡窓口を運営します。自国のサマリーを合意された交換形式に変換して国境を越えて送り、受信国が現地の言語で表示します。 | MyHealth@EU の eHealth 国別連絡窓口 [[1]](#ref-1) [[2]](#ref-2) |
| **地域交換ネットワーク** | 保健省が、共通の地域ガイドの下で、国の FHIR サーバーを通じて IPS 文書を交換します。 | ラテンアメリカ・カリブ地域の RACSEL の IPS-LAC と、デジタルヘルスのための汎米ハイウェイ（PH4H） [[16]](#ref-16) |
| **患者を介する方式** | 患者がアプリやウォレットで IPS を保持し、QR コードや SMART Health Link で共有します。 | CommonHealth、巡礼のための WHO 信頼ネットワークの IPS の取り組み [[10]](#ref-10) [[14]](#ref-14) |
| **API ベースのアクセス** | アプリが FHIR API で、認可された患者の IPS を取得します。 | International Patient Access（IPA）、CMS 相互運用性フレームワークの下で IPS 対応を追加した Flexpa のような米国のネットワーク [[17]](#ref-17) [[18]](#ref-18) |

計画しておくべき統合ポイント：

- **文書共有：** MHD（FHIR）や XDS（文書レジストリ）などの IHE プロファイルが、IPS 文書を保存し検索します。IHE IPS コンテンツプロファイルは、適合性とテストの規則を追加します [[11]](#ref-11)。
- **患者の識別：** IHE PIXm と PDQm、または国の識別子で、システム間の患者を突合します。
- **既存の文書：** 多くのシステムはすでに CDA、C-CDA、または国のサマリーを生成しています。これらを IPS にマッピングするほうが、一からやり直すより通常は簡単ですが、カーディナリティ、バリューセット、コード体系の違いを確認してください。
- **国別プロファイル：** US Core、AU Core、CH Core、JP Core のような国の中核は、IPS と異なる場合があります。国の患者サマリープロファイルが両者を調整します [[5]](#ref-5) [[6]](#ref-6) [[19]](#ref-19)。
- **翻訳と表示：** 受信側は叙述を表示し、受信側の言語でのコードの表示名を使って、コード化エントリを翻訳すべきです。
- **セキュリティ：** TLS、必要に応じた署名付き文書、監査ログ（IHE ATNA や BALP など）、同意に結び付いたアクセス制御を使用します。


## 現在の導入状況

IPS は、試験的な取り組みから、国や地域のプログラムへ移行しました。状況は速く変わるため、最新の状況はリンク先の情報源で確認してください。

- **IPS 実装レジストリ。** IPS コミュニティは、実装の公開レジストリを維持しています。2026年半ばには34件が登録されており、アルゼンチンの提供者仲介型 IPS-LAC プロジェクトからベトナムの Better Health Program までありました [[15]](#ref-15)。
- **FHIR エコシステム。** HL7 International と Firely による2025年の State of FHIR 調査では、42人の回答者が、IPS が自国の FHIR 仕様の基盤になっていると答え、これはどの国際ガイドよりも多い数でした [[20]](#ref-20)。
- **研究。** IPS の導入に関する2025年の研究では関係者にインタビューが行われ、ケアの質の向上と患者安全が主な利点として挙げられました [[21]](#ref-21)。

| 国または地域 | 状況 |
|---|---|
| **欧州連合と EEA** | MyHealth@EU は、国の間で患者サマリーと電子処方箋を交換しています。2026年の欧州委員会のプレゼンテーションでは、17の加盟国とノルウェーが稼働中で、残りの大半も参加を計画していると報告されました [[2]](#ref-2) [[22]](#ref-22)。EHDS 規則により、患者サマリーの交換は2029年までに義務化されます [[23]](#ref-23)。 |
| **カナダ** | 2022年10月に Canada Health Infoway が承認した汎カナダ患者サマリー（PS-CA）は、カナダ向けの調整を加えて IPS の上に構築されています [[4]](#ref-4)。 |
| **オーストラリア** | IPS と AU Core の上に構築された AU Patient Summary は、HL7 Australia が Sparked プログラムを通じて開発しています [[5]](#ref-5) [[24]](#ref-24)。 |
| **スイス** | HL7 Switzerland の CH IPS 2.0.0（試用）は、IPS と CH Core の上に構築されています。別のプロファイルが、スイスの電子患者記録に必要なものを追加します [[6]](#ref-6)。 |
| **米国** | IPS に対する連邦の義務はありません。米国は US Core と USCDI を使用しています。連邦機関は国際的な IPS の作業に参加しており、一部のネットワークは IPS を自主的にサポートしています [[18]](#ref-18)。 |
| **ラテンアメリカ・カリブ** | RACSEL の保健省は、地域の IPS-LAC ガイドを使用しています。2023年には、16か国がサンパウロのコネクタソンで IPS-LAC 文書を交換しました [[16]](#ref-16)。 |
| **日本** | 研究者が、JP Core を用いて、日本の一般的なユースケース向けの IPS ベースの患者サマリーアプリケーションを構築し、検証しました [[19]](#ref-19)。 |
| **台湾とフィリピン** | 2025年の実装報告は、FHIR を使用し IPS と整合した、越境の個人健康記録について述べています [[25]](#ref-25)。 |
| **G7** | 2021年、G7 保健大臣は IPS に向けて取り組むことを約束し、IPS ロードマップを公表しました [[26]](#ref-26)。 |
| **WHO** | WHO グローバルデジタルヘルス認証ネットワークには、巡礼向けの検証可能な IPS のような、IPS ベースの信頼ドメインが含まれています [[14]](#ref-14)。 |


## 国・地域別の法律、規則、政策

IPS は標準であり、法律ではありません。患者サマリーを交換する義務が国にあるか、どの形式で、どのプライバシー規則の下で行うかは、法律が決めます。これは概要であり、法的助言ではありません。必ず最新の法令の条文を確認してください。

| 法域 | 法律または政策 | IPS にとっての意味 |
|---|---|---|
| **欧州連合** | **欧州ヘルスデータスペース（EHDS）規則、(EU) 2025/327。** 2025年3月5日公布、2025年3月26日発効 [[23]](#ref-23) [[27]](#ref-27)。 | 患者サマリーは「優先カテゴリ」です。欧州 EHR 交換形式での交換は、2029年までにすべての加盟国で機能しなければなりません。医用画像、検査結果、退院報告書は2031年までに続きます [[28]](#ref-28)。患者サマリーの形式は HL7 IPS に基づきます。 |
| **欧州連合** | 越境医療における患者の権利に関する**指令 2011/24/EU** [[29]](#ref-29)。 | MyHealth@EU の基になる患者サマリーのガイドラインに合意した eHealth Network を創設しました。 |
| **欧州連合** | **一般データ保護規則（GDPR）、(EU) 2016/679** [[30]](#ref-30)。 | 健康データは特別な類型です。IPS のあらゆる交換には、適法な根拠と適切な保護措置が必要です。 |
| **米国** | **21世紀治療法と情報ブロッキング規則** [[31]](#ref-31)、任意の **CMS 相互運用性フレームワーク**（2025年） [[17]](#ref-17)。 | IPS を義務づける法律はありません。法律は US Core と USCDI を用いた、電子健康情報へのアクセスと交換を求めています。IPS のサポートは任意です。 |
| **カナダ** | 州・準州の健康情報法。連邦の **Connected Care for Canadians Act**（法案 C-72）は2024年に提出されましたが、2025年に議会が閉会する前に成立しませんでした。 | PS-CA は汎カナダの仕様であり、法的要件ではありません。導入は、Canada Health Infoway とともに州・準州が主導しています [[4]](#ref-4)。 |
| **英国** | **Data (Use and Access) Act 2025** [[32]](#ref-32)。 | 医療および成人の社会的ケアの IT について、情報標準を定める権限を含みます。英国は2021年の G7 の IPS への約束を主催しました [[26]](#ref-26)。 |
| **オーストラリア** | **My Health Records Act 2012** と2025年の「デフォルトで共有」改正。 | AU Patient Summary は、Sparked を通じて開発されている国の仕様です [[5]](#ref-5) [[24]](#ref-24)。 |
| **スイス** | **電子患者記録に関する2015年6月19日の連邦法（EPRA、SR 816.1）**、2017年4月15日施行 [[33]](#ref-33)。 | CH IPS には、スイスの電子患者記録内の文書向けのプロファイルが含まれます [[6]](#ref-6)。 |
| **ラテンアメリカ・カリブ** | RACSEL と PH4H による地域合意。米州開発銀行が地域の法的枠組みを支援 [[16]](#ref-16)。 | IPS-LAC は、越境交換のために合意された地域形式です。 |
| **G7** | 2021年6月オックスフォードの**保健大臣コミュニケ**と、2021年12月の **G7 IPS ロードマップ** [[26]](#ref-26) [[34]](#ref-34)。 | IPS と患者アクセスに向けて取り組む政治的な約束であり、拘束力のある法律ではありません。 |


## 長所と短所

| 長所 | 短所 |
|---|---|
| **より安全な予定外の医療。** 臨床医は、アレルギー、薬剤、問題を数秒で確認できます。 | **情報源の質に左右される。** 古い、または誤った元データからは、古い、または誤ったサマリーができます。 |
| **世界で一つの形式。** 一つの実装で、国内と越境のニーズに応えられます。 | **国による差異。** 国別プロファイルが規則を追加するため、ある国で「有効な IPS」が別の国で受け入れられるには作業が必要な場合があります。 |
| **オープンで成熟した標準の上に構築：** ISO、CEN、HL7 FHIR と CDA、SNOMED CT、LOINC。 | **用語体系の負担。** ローカルコードを SNOMED CT と LOINC にマッピングするのは大変で、完全な SNOMED CT には、無償の IPS 部分集合を超えるライセンスが必要です。 |
| **読めて計算できる。** 人のための叙述、ソフトウェアと翻訳のためのコード化データ。 | 生成側が不注意だと、**叙述とコード化データが食い違う**ことがあり、受信側が誤った方を信じるおそれがあります。 |
| **患者のエンパワーメント。** 患者が自分のサマリーを保持し共有できます。 | **プライバシーと同意のリスク。** 持ち運べるサマリーは機微であり、法律や同意モデルは国によって異なります。 |
| **無償の仕様**と無償の IPS 用語体系がコストを下げます [[12]](#ref-12)。 | **バージョンの変動。** STU 1、STU 1.1、STU 2 が併存し、EHDS 形式はそれより前のバージョンを参照しています [[28]](#ref-28)。 |
| 予防接種証明書、研究、レジストリに**再利用できます** [[7]](#ref-7) [[8]](#ref-8)。 | **意図的に最小限。** 完全な記録や診療科の文書の代わりにはならず、二次利用の不足分には拡張が必要です [[7]](#ref-7)。 |
| 政府、EU、G7、WHO、標準化団体からの**強い後ろ盾**。 | **導入のばらつき。** 多くの国やベンダーはまだ試行中で、患者の認知度も低いです。 |


## 計画と今後の方向性

- **EU、2029年：** EHDS の下で、すべての EU 加盟国で患者サマリーと電子処方箋の交換が稼働 [[23]](#ref-23) [[28]](#ref-28)。
- **EU、2031年：** 医用画像、検査結果、退院報告書が欧州 EHR 交換形式に加わる [[28]](#ref-28)。
- **MyHealth@EU の拡大：** より多くの国の参加と、検査結果、退院報告書、医用画像の新しいサービス [[2]](#ref-2) [[22]](#ref-22)。
- **FHIR IPS STU 2 の導入：** 実装者がアラートと患者のストーリーのセクション、明示的な空のセクション、SNOMED CT IPS 用語体系へ移行 [[9]](#ref-9)。
- **オーストラリア：** AU Patient Summary Release 1 の公開、2026年に予定 [[24]](#ref-24)。
- **IPS ベストプラクティスプロジェクト：** 得られた教訓を文書化するコミュニティの取り組みで、作業は2026年に開始。
- **WHO 信頼ネットワーク：** 検証可能で持ち運べる健康文書のための、IPS ベースの信頼ドメインの拡大 [[14]](#ref-14)。
- **SMART Health Links：** 患者が管理する共有のため、HL7 を通じて標準化 [[10]](#ref-10)。
- **ラテンアメリカ・カリブ：** PH4H による IPS-LAC 交換の拡大 [[16]](#ref-16)。
- **研究と二次利用：** 中核を最小限に保ちつつ、臨床研究と AI のために患者サマリーを拡張する取り組み [[7]](#ref-7)。


## 用語集

| 用語 | 意味 |
|---|---|
| **IPS** | 国際患者サマリー（International Patient Summary） |
| **FHIR** | Fast Healthcare Interoperability Resources。HL7 の現代的な API ベースの標準 |
| **CDA** | Clinical Document Architecture。HL7 の XML 文書標準 |
| **IG** | 実装ガイド（Implementation Guide）。標準を適用するためのプロファイルと規則のセット |
| **プロファイル** | 特定の用途のために制約された FHIR リソースのバージョン |
| **SNOMED CT** | Systematized Nomenclature of Medicine – Clinical Terms |
| **LOINC** | Logical Observation Identifiers Names and Codes |
| **SMART Health Links** | リンクまたは QR コードで健康データを共有するための標準 |
| **JIC** | Joint Initiative Council for Global Health Informatics Standardization（世界保健情報標準化共同イニシアチブ評議会） |


## さらに詳しく

- HL7 FHIR IPS 実装ガイド：<https://hl7.org/fhir/uv/ips/>
- IPS 継続ビルド：<https://build.fhir.org/ig/HL7/fhir-ips/>
- 国際患者サマリープロジェクトのサイト：<https://international-patient-summary.net/>
- ISO 27269（医療情報学 — 国際患者サマリー）：<https://www.iso.org/standard/79491.html>
- SNOMED CT IPS 用語体系：<https://www.snomed.org/international-patient-summary-terminology>
- SMART Health Links：<https://docs.smarthealthit.org/smart-health-links/>


## リソース

これらのリンクは、IPS に関する情報源、仕様、ソフトウェア、プロジェクト、動画、書籍、研究を扱っています。ほとんどは、このページの執筆時に確認しました。一部の出版社のサイトは自動チェックを拒否するため、それらには *（未確認）* と付けています。

### 公式の仕様と標準

- [HL7 FHIR IPS 実装ガイド、現在の公開版](https://hl7.org/fhir/uv/ips/)は、権威ある FHIR 仕様です。
- [HL7 FHIR IPS 実装ガイド、STU 2](https://hl7.org/fhir/uv/ips/STU2/)
- [HL7 FHIR IPS 実装ガイド、STU 1.1](https://hl7.org/fhir/uv/ips/STU1.1/)
- [HL7 FHIR IPS 公開履歴](https://www.hl7.org/fhir/uv/ips/history.html)は、公開されたすべてのバージョンを一覧にしています。
- [HL7 FHIR IPS 継続ビルド](https://build.fhir.org/ig/HL7/fhir-ips/)は、投票前の最新の作業中の内容です。
- [国際患者サマリーの構造](https://hl7.org/fhir/uv/ips/en/Structure-of-the-International-Patient-Summary.html)は、セクションとプロファイルを説明しています。
- [IPS 設計規約](https://build.fhir.org/ig/HL7/fhir-ips/en/Design-Conventions.html)は、must-support、欠落データ、叙述を扱っています。
- [IPS の生成とデータの包含](https://build.fhir.org/ig/HL7/fhir-ips/en/Generation-and-Data-Inclusion.html)は、`$summary` と内容の選び方を扱っています。
- [HL7 CDA IPS 実装ガイド、継続ビルド](https://build.fhir.org/ig/HL7/CDA-IPS/)
- [HL7 CDA IPS 製品概要](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483)
- [ISO 27269、医療情報学 — 国際患者サマリー](https://www.iso.org/standard/79491.html) *（未確認）*
- [ISO/TC 215 医療情報学委員会](https://www.iso.org/committee/54960.html) *（未確認）*
- [IHE FHIR 国際患者サマリープロファイル（FIIO）](https://profiles.ihe.net/PCC/FIIO/volume-1.html)
- [IHE PCC 国際患者サマリー補遺、2020年（PDF）](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)
- [HL7 SMART Health Cards and Links 実装ガイド](https://hl7.org/fhir/uv/smart-health-cards-and-links/)
- [SMART Health Links ドキュメント](https://docs.smarthealthit.org/smart-health-links/)
- [HL7 FHIR International Patient Access（IPA）](https://hl7.org/fhir/uv/ipa/)は、患者の API アクセスのための姉妹仕様です。
- [HL7 FHIR R4 基本仕様](https://hl7.org/fhir/R4/)。IPS はこれを土台にしています。

### ソースリポジトリ

- [HL7/fhir-ips](https://github.com/HL7/fhir-ips) は、FHIR Shorthand による FHIR IPS IG のソースを保持しています。
- [HL7/cda-ips](https://github.com/HL7/cda-ips) は、CDA IPS IG のソースを保持しています。
- [hl7-eu/eps](https://github.com/hl7-eu/eps) は、HL7 Europe 患者サマリーのソースを保持しています。
- [hl7ch/ch-ips](https://github.com/hl7ch/ch-ips) は、スイスの IPS を保持しており、ビューアーとジェネレーターが開発中です。
- [GitHub トピック：international-patient-summary](https://github.com/topics/international-patient-summary) は、コミュニティのリポジトリを一覧にしています。

### 国別および地域別の適応

- [HL7 Europe 患者サマリー（EPS）、継続ビルド](https://build.fhir.org/ig/hl7-eu/eps/)
- [AU Patient Summary（オーストラリア）、継続ビルド](https://build.fhir.org/ig/hl7au/au-fhir-ps/)
- [Trillium II の IPS 構造（HL7 Europe）](https://hl7.eu/fhir/build/trillium2/site/ipsStructure.html)は、IPS の始動を助けた EU–米国のプロジェクトのものです。
- [eHealth Suisse](https://www.ehealthsuisse.ch/) は、スイスのデジタルヘルスとその IPS 導入のためのコンピテンスセンターです。
- [MyHealth@EU、越境デジタルヘルスサービス](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)
- [Xt-EHR 共同行動](https://www.xt-ehr.eu/)は、患者サマリーを含む欧州ヘルスデータスペースの形式を準備しています。

### ソフトウェアとツール

- [IPS Viewer](https://www.ipsviewer.com)（[ソース：jddamore/IPSviewer](https://github.com/jddamore/IPSviewer)）は、オープンソースのブラウザベースの IPS ビューアーです。
- [uwcirg/shl-ips-viewer](https://github.com/uwcirg/shl-ips-viewer) は、SMART Health Link で共有された IPS を表示します。
- [smart-on-fhir/smart-health-links](https://github.com/smart-on-fhir/smart-health-links) は、SMART Health Links のリファレンス実装です。
- [HAPI FHIR IPS ジェネレーター](https://hapifhir.io/hapi-fhir/docs/server_ips/introduction.html)（[ソース：hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)）は、`$summary` を実装するオープンソースの Java サーバーモジュールです。
- [HAPI FHIR JPA サーバー IPS ドキュメント](https://hapifhir.io/hapi-fhir/docs/server_jpa/ips.html)
- [Inferno IPS Test Kit](https://inferno.healthit.gov/test-kits/ips)（[ソース：inferno-framework/ips-test-kit](https://github.com/inferno-framework/ips-test-kit)）は、オープンソースの適合性テストキットです。
- [FHIR Validator](https://validator.fhir.org/) は、IG のプロファイルに対して IPS バンドルを検証します。
- [Simplifier：hl7.fhir.uv.ips パッケージ](https://simplifier.net/packages/hl7.fhir.uv.ips)には、パッケージ、プロファイル、例があります。
- [FHIR パッケージレジストリ](https://registry.fhir.org/)
- [FHIR Shorthand（FSH）School](https://fshschool.org/) は、IPS IG が書かれている言語を教えています。
- [CommonHealth](https://www.commonhealth.org/) は、IPS を生成して SMART Health Links で共有する患者向けアプリです。
- [WHO SMART Trust](https://github.com/WorldHealthOrganization/smart-trust) は、WHO グローバルデジタルヘルス認証ネットワークの信頼フレームワークです。

### 組織とプロジェクト

- [国際患者サマリープロジェクトのサイト](https://international-patient-summary.net/)には、ニュース、導入レポート、教育資料があります。
- [ヘルス IT 開発者向け IPS](https://international-patient-summary.net/health-it-developer/)
- [HL7 International](https://www.hl7.org/)
- [IHE International](https://www.ihe.net/)
- [SNOMED International](https://www.snomed.org/)
- [SNOMED CT IPS 用語体系](https://www.snomed.org/international-patient-summary-terminology)は、IPS で使える無償の部分集合です。
- [LOINC](https://loinc.org/) *（未確認）*
- [世界保健情報標準化共同イニシアチブ評議会（JIC）](http://www.jointinitiativecouncil.org/)
- [グローバルデジタルヘルスパートナーシップ（GDHP）](https://gdhp.health/)
- [WHO SMART ガイドライン](https://smart.who.int/)
- [WHO グローバルデジタルヘルス認証ネットワーク](https://www.who.int/initiatives/global-digital-health-certification-network)

### コミュニティとイベント

- [chat.fhir.org](https://chat.fhir.org/) は FHIR コミュニティのチャットで、活発な IPS ストリームがあります。
- [HL7 FHIR コネクタソン](https://www.hl7.org/events/fhir-connectathon/)
- [IHE コネクタソン](https://www.ihe.net/participate/connectathon/)

### 動画

- [HIMSS20：計算可能なケアガイドラインのための IPS を 200 秒以内で（IHE International、YouTube）](https://www.youtube.com/watch?v=xjEzGM8kBPw)
- [IHE International の YouTube チャンネル](https://www.youtube.com/@IHEIntl)には、コネクタソンのパネルと IPS のセッションがあります。
- [IPS プロジェクトサイトのニュース](https://international-patient-summary.net/)は、次のような多くの録画ウェビナーにリンクしています。
  - IHE North America Connectathon 2024 での IPS パネル
  - FHIR DevDays 2023 での IPS セッション
  - Grahame Grieve による IPS と IPA、IHE Connectathon Montreux 2022
  - SNOMED CT Expo 2022 の基調講演
  - GDHP における IPS についての Matthew Rahn
  - HL7 の越境ウェビナー「Global Passport」
- [YouTube 検索：International Patient Summary](https://www.youtube.com/results?search_query=international+patient+summary)

### 書籍

- Tim Benson と Grahame Grieve、[*Principles of Health Interoperability: FHIR, HL7 and SNOMED CT*](https://link.springer.com/book/10.1007/978-3-030-56883-2)、第4版、Springer、2020年。FHIR、臨床サマリーのリソース、用語体系を扱っています。

### 研究論文と記事

- Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al., "[An assessment of the European Patient Summary for clinical research: a case study in cardiology](https://doi.org/10.3389/fmed.2024.1481551)", *Frontiers in Medicine*, 2024.
- Lee H., Huang J., Huang S., Chen W., et al., "[Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources](https://doi.org/10.2196/56272)", *JMIR Formative Research*, 2025.
- Song C., Nakayama M., "[Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan](https://doi.org/10.1007/s10916-023-01993-6)", *Journal of Medical Systems*, 2023.
- Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S., "[The adoption and diffusion of the International Patient Summary](https://doi.org/10.24251/hicss.2025.425)", *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025.
- da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al., "[Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective](https://doi.org/10.3389/fmed.2025.1648170)", *Frontiers in Medicine*, 2025.
- Kay S., Cangioli G., Nusbaum M., "[The International Patient Summary and the extensibility requirement](https://international-patient-summary.net/the-international-patient-summary-and-the-extensibility-requirement/)", *Studies in Health Technology and Informatics* (pHealth), 2020.
- D'Amore J., Cangioli G., Hausam R., "[Advancing the International Patient Summary](https://international-patient-summary.net/advancing-the-international-patient-summary/)"
- "[Towards the Austrian Patient Summary](https://international-patient-summary.net/towards-the-austrian-patient-summary/)", *Studies in Health Technology and Informatics* (dHealth).
- "[Revival of the International Patient Summary (IPS)](https://smiledigitalhealth.com/our-blog/revival-of-the-international-patient-summary-ips)"、Smile Digital Health のブログ。
- [PubMed 検索："international patient summary"](https://pubmed.ncbi.nlm.nih.gov/?term=%22international+patient+summary%22)。査読済みの文献を探せます。


## 参考文献

本文中の [1] のような番号付きの引用は、下の対応する項目にリンクしています。リンクは2026年11月に確認しました。法律、導入数、バージョンは変わるため、最新の状況は情報源で確認してください。

1. <a id="ref-1"></a>European Commission. "[Electronic cross-border health services (MyHealth@EU)](https://health.ec.europa.eu/ehealth-digital-health-and-care/electronic-cross-border-health-services_en)". Directorate-General for Health and Food Safety.
2. <a id="ref-2"></a>European Commission. "[My rights over my health data](https://health.ec.europa.eu/ehealth-digital-health-and-care/my-rights-over-my-health-data_en)". Directorate-General for Health and Food Safety.
3. <a id="ref-3"></a>World Health Organization. "[Global Digital Health Certification Network](https://www.who.int/initiatives/global-digital-health-certification-network)".
4. <a id="ref-4"></a>Canada Health Infoway. "[What is IPS and Patient Summary? Pan-Canadian Patient Summary (PS-CA)](https://infoscribe.infoway-inforoute.ca/x/XIElE)". InfoScribe.
5. <a id="ref-5"></a>HL7 Australia. "[AU Patient Summary Implementation Guide](https://hl7.org.au/fhir/ps)".
6. <a id="ref-6"></a>HL7 Switzerland. "[CH IPS (R4) Implementation Guide](https://fhir.ch/ig/ch-ips/index.html)".
7. <a id="ref-7"></a>Laleci Erturkmen G. B., Sinaci A. A., Namli T., Boonstra M., et al. "An assessment of the European Patient Summary for clinical research: a case study in cardiology". *Frontiers in Medicine*, 2024. [doi:10.3389/fmed.2024.1481551](https://doi.org/10.3389/fmed.2024.1481551).
8. <a id="ref-8"></a>World Health Organization. "[GDHCN Trust Network: Personal Health Wallet](https://build.fhir.org/ig/WorldHealthOrganization/smart-trust-phw/)". Continuous build.
9. <a id="ref-9"></a>HL7 International. "[International Patient Summary Implementation Guide: Changes](https://hl7.org/fhir/uv/ips/changes.html)".
10. <a id="ref-10"></a>HL7 International. "[SMART Health Cards and Links Implementation Guide](https://hl7.org/fhir/uv/smart-health-cards-and-links/)".
11. <a id="ref-11"></a>IHE International. "[FHIR International Patient Summary (FIIO)](https://profiles.ihe.net/PCC/FIIO/volume-1.html)". IHE Patient Care Coordination.
12. <a id="ref-12"></a>SNOMED International. "[SNOMED CT International Patient Summary Terminology](https://www.snomed.org/international-patient-summary-terminology)".
13. <a id="ref-13"></a>Inferno. "[International Patient Summary Test Kit](https://inferno.healthit.gov/test-kits/ips)".
14. <a id="ref-14"></a>World Health Organization. "[WHO SMART Trust Implementation Guide](https://smart.who.int/trust/index.html)".
15. <a id="ref-15"></a>International Patient Summary project. "[IPS Implementation Registry](https://international-patient-summary.net/ips-implementation-registry/)".
16. <a id="ref-16"></a>International Patient Summary project. "[IPS in the Latin America and Caribbean region](https://international-patient-summary.net/ips-in-the-latin-america-and-caribbean-region/)".
17. <a id="ref-17"></a>Centers for Medicare & Medicaid Services. "[Interoperability Framework](https://www.cms.gov/interoperability)".
18. <a id="ref-18"></a>Flexpa. "[CMS Aligned Network](https://www.flexpa.com/docs/network/cms)". Documentation.
19. <a id="ref-19"></a>Song C., Nakayama M. "Implementation of a Patient Summary Web Application According to the International Patient Summary and Validation in Common Use Cases in Japan". *Journal of Medical Systems*, 2023. [doi:10.1007/s10916-023-01993-6](https://doi.org/10.1007/s10916-023-01993-6).
20. <a id="ref-20"></a>D'Amore J. "[State of FHIR IPS](https://international-patient-summary.net/wp-content/uploads/2025/11/2025-Annual-Symposium-State-of-FHIR-IPS-DAMORE.pdf)". AMIA 2025 Annual Symposium (slides).
21. <a id="ref-21"></a>Schippers D., Spil T., Stegwee R., Folmer E., Donnelly S. "The adoption and diffusion of the International Patient Summary". *Proceedings of the 58th Hawaii International Conference on System Sciences (HICSS)*, 2025. [doi:10.24251/hicss.2025.425](https://doi.org/10.24251/hicss.2025.425).
22. <a id="ref-22"></a>Raffaelli F. "[European Health Data Space](https://connectathon.ihe-europe.net/sites/ihe-cat2014.org/files/IHE_EU_EXP_DAYS_2026_Fulvia_Raffaelli_European_Commission.pdf)". European Commission, IHE Europe Experience Days 2026 (slides).
23. <a id="ref-23"></a>European Commission. "[European Health Data Space Regulation (EHDS)](https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space-regulation-ehds_en)".
24. <a id="ref-24"></a>CSIRO Sparked. "[Australian Patient Summary (AU PS)](https://sparked.csiro.au/?p=1881)".
25. <a id="ref-25"></a>Lee H., Huang J., Huang S., Chen W., et al. "Implementing a Cross-Border Next-Generation Personal Health Record in the Philippines and Taiwan: An Implementation Case Report Using Health Level 7 International Fast Healthcare Interoperability Resources". *JMIR Formative Research*, 2025. [doi:10.2196/56272](https://doi.org/10.2196/56272).
26. <a id="ref-26"></a>G7. "[G7 International Patient Summary Roadmap](https://assets.publishing.service.gov.uk/media/61d82fbd8fa8f505893f1c93/G7-international-patient-summary-roadmap.pdf)". UK Department of Health and Social Care, December 2021.
27. <a id="ref-27"></a>European Union. "[Regulation (EU) 2025/327 on the European Health Data Space](https://eur-lex.europa.eu/eli/reg/2025/327/oj)". *Official Journal of the European Union*, 5 March 2025.
28. <a id="ref-28"></a>da Silva Carvalho N., Papadimitriou A., Stegwee R., Gille H., et al. "Accelerating European electronic health record exchange format (EEHRxF) implementation across Europe: a policy perspective". *Frontiers in Medicine*, 2025. [doi:10.3389/fmed.2025.1648170](https://doi.org/10.3389/fmed.2025.1648170).
29. <a id="ref-29"></a>European Union. "[Directive 2011/24/EU on the application of patients' rights in cross-border healthcare](https://eur-lex.europa.eu/eli/dir/2011/24/oj)". *Official Journal of the European Union*, 2011.
30. <a id="ref-30"></a>European Union. "[Regulation (EU) 2016/679, the General Data Protection Regulation](https://eur-lex.europa.eu/eli/reg/2016/679/oj)". *Official Journal of the European Union*, 2016.
31. <a id="ref-31"></a>Assistant Secretary for Technology Policy (ASTP/ONC). "[Information Blocking](https://www.healthit.gov/topic/information-blocking)". HealthIT.gov.
32. <a id="ref-32"></a>UK Parliament. "[Data (Use and Access) Act 2025](https://www.legislation.gov.uk/ukpga/2025/18/contents)". legislation.gov.uk.
33. <a id="ref-33"></a>eHealth Suisse. "[eHealth Suisse: competence and coordination centre of the Confederation and the cantons](https://www.e-health-suisse.ch/en/about-us/ehealth-suisse)". For the Act itself, search for SR 816.1 on [Fedlex](https://www.fedlex.admin.ch/).
34. <a id="ref-34"></a>UK Department of Health and Social Care. "[G7 patient access to health records: final report](https://www.gov.uk/government/publications/g7-health-track-digital-health-final-reports/g7-patient-access-to-health-records-final-report)". GOV.UK, 2021.

### 参考文献（追加）

以下の情報源は上では引用されていませんが、標準そのものの主要な参照先です。

- ISO. "[ISO 27269: Health informatics — International patient summary](https://www.iso.org/standard/79491.html)". 2021.
- CEN. "EN 17269: Health informatics — The International Patient Summary". 2019.
- CEN. "CEN/TS 17288: Health informatics — The International Patient Summary: Guideline for European implementation".
- HL7 International. "[International Patient Summary Implementation Guide (FHIR)](https://hl7.org/fhir/uv/ips/)".
- HL7 International. "[International Patient Summary Implementation Guide (CDA), continuous build](https://build.fhir.org/ig/HL7/CDA-IPS/)".
- HL7 International. "[Structure of the International Patient Summary](https://hl7.org/fhir/uv/ips/Structure-of-the-International-Patient-Summary.html)".
- IHE International. "[IHE PCC International Patient Summary supplement (PDF)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS_Rev1-0_PC_2020-03-17.pdf)". 2020.
- HL7 International. "[International Patient Access (IPA)](https://hl7.org/fhir/uv/ipa/)".
- HL7 Europe. "[HL7 Europe Patient Summary (EPS), continuous build](https://build.fhir.org/ig/hl7-eu/eps/)".
- International Patient Summary project. "[international-patient-summary.net](https://international-patient-summary.net/)".
- Benson T., Grieve G. *[Principles of Health Interoperability: FHIR, HL7 and SNOMED CT](https://link.springer.com/book/10.1007/978-3-030-56883-2)*. 4th edition. Springer, 2020.
