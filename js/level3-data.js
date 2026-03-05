const LEVEL3_DATA = {
    id: 3,
    title: "GAMP 5フレームワーク",
    icon: "🏗️",
    description: "GAMP 5の基本原則とフレームワークを理解する",
    modules: [
        {
            id: 301,
            title: "GAMP 5の概要と基本原則",
            duration: "20分",
            content: `
                <h2>GAMP 5とは</h2>
                <p>GAMP 5（Good Automated Manufacturing Practice 5）は、ISPE（International Society for Pharmaceutical Engineering）が発行する製薬業界のコンピューターシステムバリデーションのためのガイドラインです。初版は2008年に発行され、2022年にSecond Edition（第2版）が発行されました。</p>
                <p>GAMP 5は法的拘束力を持つ規制ではありませんが、世界中の製薬企業がCSVの実施フレームワークとして広く採用しており、事実上の業界標準（デファクトスタンダード）です。規制当局の査察においてもGAMP 5に基づくアプローチは広く認知・受容されています。</p>
                <p>GAMP 5の正式タイトルは「A Risk-Based Approach to Compliant GxP Computerized Systems」であり、リスクベースアプローチが基本理念であることがタイトルからも明らかです。</p>

                <h2>GAMP 5の基本原則</h2>
                <table>
                    <thead>
                        <tr><th>原則</th><th>説明</th><th>実践例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>製品品質とプロセスの理解</td><td>システムが支える製品品質とプロセスを深く理解する</td><td>GxPインパクトアセスメント</td></tr>
                        <tr><td>ライフサイクルアプローチ</td><td>計画から廃止まで全段階で品質を管理する</td><td>VMP、定期レビュー、リタイアメント</td></tr>
                        <tr><td>スケーラブルアプローチ</td><td>リスクと複雑性に応じてバリデーション活動を調整する</td><td>カテゴリ分類、リスクアセスメント</td></tr>
                        <tr><td>科学に基づく品質リスクマネジメント</td><td>科学的根拠に基づくリスク評価と対策</td><td>FMEA、リスクマトリクス</td></tr>
                        <tr><td>供給者の活用</td><td>供給者の知識と専門性を最大限活用する</td><td>供給者アセスメント、テストの活用</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 ポイント</div>
                    <p>GAMP 5の核心は「スケーラブルアプローチ」です。全てのシステムに同じレベルのバリデーションを適用するのではなく、リスクと複雑性に応じて深度を調整することで、効率的かつ効果的なバリデーションを実現します。</p>
                </div>

                <h2>GAMP 5 Second Edition（第2版）の変更点</h2>
                <p>2022年に発行されたSecond Editionでは、以下の重要な更新が行われました。</p>
                <ul>
                    <li><strong>CSAアプローチの統合</strong>：Critical Thinkingに基づくテスト戦略の導入</li>
                    <li><strong>アンスクリプテッドテスト</strong>：従来のスクリプテッドテストに加え、探索的テストの正式な位置づけ</li>
                    <li><strong>クラウド・SaaSへの対応</strong>：クラウドベースシステムのバリデーションガイダンスの追加</li>
                    <li><strong>データインテグリティの強化</strong>：ALCOA+原則に基づく要件の明確化</li>
                    <li><strong>アジャイル開発への対応</strong>：反復型開発手法とバリデーションの両立に関するガイダンス</li>
                    <li><strong>供給者管理の更新</strong>：SaaSプロバイダー等の新しいタイプの供給者への対応</li>
                </ul>

                <h2>GAMP 5の適用範囲</h2>
                <p>GAMP 5はGxP環境のあらゆるコンピューターシステムに適用可能です。</p>
                <table>
                    <thead>
                        <tr><th>適用分野</th><th>対象システム例</th><th>関連GxP</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>製造</td><td>MES、SCADA、DCS</td><td>GMP</td></tr>
                        <tr><td>品質管理</td><td>LIMS、QMS</td><td>GMP/GLP</td></tr>
                        <tr><td>臨床試験</td><td>EDC、CTMS</td><td>GCP</td></tr>
                        <tr><td>安全性</td><td>安全性DB、ICSR管理</td><td>GVP</td></tr>
                        <tr><td>流通</td><td>WMS、GDP管理システム</td><td>GDP</td></tr>
                    </tbody>
                </table>

                <div class="info-box success">
                    <div class="info-box-title">✅ まとめ</div>
                    <p>GAMP 5は「リスクベース」「ライフサイクル」「スケーラブル」の3つのキーワードで特徴づけられます。第2版ではCSAアプローチの統合とクラウド対応が加わり、現代のIT環境に対応したフレームワークへと進化しています。</p>
                </div>
            `,
            quiz: [
                {
                    id: "q301_1",
                    type: "choice",
                    question: "GAMP 5を発行している組織はどこですか？",
                    options: [
                        "FDA（米国食品医薬品局）",
                        "ICH（医薬品規制調和国際会議）",
                        "ISPE（国際製薬技術者協会）",
                        "WHO（世界保健機関）"
                    ],
                    answer: 2,
                    explanation: "GAMP 5はISPE（International Society for Pharmaceutical Engineering）が発行する業界ガイドラインです。"
                },
                {
                    id: "q301_2",
                    type: "choice",
                    question: "GAMP 5の正式タイトルに含まれるキーワードとして正しいものはどれですか？",
                    options: [
                        "Document-Based Approach",
                        "Risk-Based Approach",
                        "Test-Based Approach",
                        "Compliance-Based Approach"
                    ],
                    answer: 1,
                    explanation: "GAMP 5の正式タイトルは「A Risk-Based Approach to Compliant GxP Computerized Systems」です。リスクベースアプローチが基本理念です。"
                },
                {
                    id: "q301_3",
                    type: "choice",
                    question: "GAMP 5 Second Edition（2022年）で新たに追加された要素として正しくないものはどれですか？",
                    options: [
                        "CSAアプローチの統合",
                        "クラウド・SaaSへの対応",
                        "ソフトウェアカテゴリの廃止",
                        "アジャイル開発への対応"
                    ],
                    answer: 2,
                    explanation: "GAMP 5 Second Editionではソフトウェアカテゴリは廃止されていません。CSAアプローチの統合、クラウド対応、アジャイル対応が追加されましたが、カテゴリ分類は引き続き基本的なフレームワークとして維持されています。"
                },
                {
                    id: "q301_4",
                    type: "choice",
                    question: "GAMP 5のスケーラブルアプローチの意味として正しいものはどれですか？",
                    options: [
                        "システムの規模に関わらず同一のバリデーションを適用する",
                        "リスクと複雑性に応じてバリデーション活動の深度を調整する",
                        "大規模システムのみにバリデーションを適用する",
                        "バリデーションコストを固定額にする"
                    ],
                    answer: 1,
                    explanation: "スケーラブルアプローチとは、リスクと複雑性に応じてバリデーション活動の深度を調整することです。全てのシステムに同じレベルのバリデーションを適用するのではなく、リスクに応じた適切なレベルで実施します。"
                },
                {
                    id: "q301_5",
                    type: "fill",
                    question: "GAMP 5 Second Editionが発行された年を西暦で入力してください。",
                    answer: "2022",
                    explanation: "GAMP 5 Second Editionは2022年に発行されました。CSAアプローチの統合やクラウド対応が主な更新内容です。"
                }
            ]
        },
        {
            id: 302,
            title: "ソフトウェアカテゴリ分類",
            duration: "20分",
            content: `
                <h2>カテゴリ分類の概要</h2>
                <p>GAMP 5では、ソフトウェアをその特性に基づいて分類し、カテゴリに応じたバリデーション戦略を策定します。これがスケーラブルアプローチの根幹をなす仕組みです。ソフトウェアのカテゴリが高くなるほど、カスタマイズの度合いが大きく、バリデーションの深度も深くなります。</p>
                <p>GAMP 5では当初Category 1, 3, 4, 5の4つのカテゴリが定義されていました（Category 2は廃止）。</p>

                <h2>各カテゴリの詳細</h2>
                <table>
                    <thead>
                        <tr><th>カテゴリ</th><th>名称</th><th>説明</th><th>例</th><th>バリデーション深度</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Cat 1</td><td>インフラストラクチャソフトウェア</td><td>OS、ミドルウェア等の基盤ソフトウェア</td><td>Windows OS、Oracle DB、ネットワーク機器</td><td>低（設置確認中心）</td></tr>
                        <tr><td>Cat 3</td><td>非構成製品</td><td>構成変更せずに使用する市販ソフトウェア</td><td>市販LIMS（標準設定）、パッケージ会計ソフト</td><td>低〜中（機能確認中心）</td></tr>
                        <tr><td>Cat 4</td><td>構成可能製品</td><td>ユーザーがビジネスプロセスに合わせて構成する</td><td>SAP、Oracle EBS、構成変更したLIMS</td><td>中〜高（構成テスト重視）</td></tr>
                        <tr><td>Cat 5</td><td>カスタムアプリケーション</td><td>特定の要件に合わせて開発されたソフトウェア</td><td>自社開発システム、カスタムマクロ</td><td>高（全面的テスト必要）</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 ポイント</div>
                    <p>カテゴリ分類は「ソフトウェア全体」ではなく「コンポーネント単位」で行います。例えば、SAPシステムの場合、SAP標準機能はCat 4、追加開発したアドオンはCat 5と、コンポーネントごとに分類することがあります。</p>
                </div>

                <h2>カテゴリ別バリデーション戦略</h2>
                <h3>Category 1：インフラストラクチャソフトウェア</h3>
                <p>OSやデータベースなどの基盤ソフトウェアです。広く使用され実績があるため、バリデーションは最小限で済みます。</p>
                <ul>
                    <li>設置確認（IQ）：正しいバージョンがインストールされていることの確認</li>
                    <li>供給者情報の確認：リリースノート、既知の問題の確認</li>
                    <li>パッチ管理方針の策定</li>
                </ul>

                <h3>Category 3：非構成製品</h3>
                <p>構成変更なしで使用する市販ソフトウェアです。供給者のテストを活用できるため、ユーザーテストは限定的です。</p>
                <ul>
                    <li>供給者アセスメントの実施</li>
                    <li>主要機能の動作確認（OQ）</li>
                    <li>ユーザー要件に対する適合性確認</li>
                </ul>

                <h3>Category 4：構成可能製品</h3>
                <p>ビジネスプロセスに合わせて構成（パラメータ設定等）するソフトウェアです。構成部分のテストが重要です。</p>
                <ul>
                    <li>構成仕様書（Configuration Specification）の作成</li>
                    <li>構成のテスト（OQ/PQ）</li>
                    <li>ワークフロー、計算ロジック等のビジネスルールのテスト</li>
                    <li>供給者テスト結果の評価・活用</li>
                </ul>

                <h3>Category 5：カスタムアプリケーション</h3>
                <p>特定の要件に合わせて開発されたソフトウェアです。最も包括的なバリデーションが必要です。</p>
                <ul>
                    <li>完全な仕様書体系（URS→FS→DS）</li>
                    <li>設計レビュー、コードレビュー</li>
                    <li>単体テスト、結合テスト、システムテスト</li>
                    <li>IQ/OQ/PQの完全実施</li>
                </ul>

                <h2>カテゴリ判定のフローチャート</h2>
                <table>
                    <thead>
                        <tr><th>判定基準</th><th>Yes</th><th>No</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>カスタム開発されたか？</td><td>→ Cat 5</td><td>次の質問へ</td></tr>
                        <tr><td>ビジネスプロセスに合わせて構成するか？</td><td>→ Cat 4</td><td>次の質問へ</td></tr>
                        <tr><td>そのまま（構成変更なしで）使用するか？</td><td>→ Cat 3</td><td>次の質問へ</td></tr>
                        <tr><td>OS・DBなどのインフラか？</td><td>→ Cat 1</td><td>再評価</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 注意</div>
                    <p>Excelマクロやスプレッドシートの計算式はCategory 5に分類されることが多いです。「Excelだから簡単」と考えず、適切なカテゴリ分類とバリデーションを実施してください。</p>
                </div>
            `,
            quiz: [
                {
                    id: "q302_1",
                    type: "choice",
                    question: "GAMP 5のCategory 4に分類されるソフトウェアの特徴はどれですか？",
                    options: [
                        "OSやデータベースなどの基盤ソフトウェア",
                        "構成変更なしで使用する市販ソフトウェア",
                        "ビジネスプロセスに合わせて構成する製品",
                        "特定の要件に合わせて開発されたソフトウェア"
                    ],
                    answer: 2,
                    explanation: "Category 4はビジネスプロセスに合わせてパラメータ設定等の構成を行う製品です。SAP、Oracle EBSなどのERPシステムが典型的な例です。"
                },
                {
                    id: "q302_2",
                    type: "choice",
                    question: "Excelマクロは通常どのカテゴリに分類されますか？",
                    options: [
                        "Category 1",
                        "Category 3",
                        "Category 4",
                        "Category 5"
                    ],
                    answer: 3,
                    explanation: "Excelマクロは特定の要件に合わせて開発されたソフトウェアとしてCategory 5に分類されることが多いです。カスタムコードを含むためです。"
                },
                {
                    id: "q302_3",
                    type: "choice",
                    question: "Category 1のソフトウェアのバリデーションで最も重要なのはどれですか？",
                    options: [
                        "完全な仕様書体系の作成",
                        "設置確認（正しいバージョンの確認）",
                        "全機能のOQ/PQテスト",
                        "コードレビューの実施"
                    ],
                    answer: 1,
                    explanation: "Category 1（インフラストラクチャソフトウェア）のバリデーションは、正しいバージョンがインストールされていることの設置確認（IQ）が中心です。"
                },
                {
                    id: "q302_4",
                    type: "choice",
                    question: "カテゴリ分類の単位として正しいものはどれですか？",
                    options: [
                        "企業全体で統一した1つのカテゴリを使用する",
                        "システム全体に対して1つのカテゴリを適用する",
                        "コンポーネント単位でカテゴリ分類を行う",
                        "プロジェクト単位でカテゴリ分類を行う"
                    ],
                    answer: 2,
                    explanation: "カテゴリ分類はコンポーネント単位で行います。1つのシステム内でも、標準機能部分と追加開発部分では異なるカテゴリが適用されることがあります。"
                },
                {
                    id: "q302_5",
                    type: "fill",
                    question: "GAMP 5のCategory 3の名称を日本語で入力してください。（漢字・カタカナで「〇構成製品」の形式）",
                    answer: "非構成製品",
                    explanation: "Category 3は「非構成製品（Non-Configured Products）」です。構成変更せずにそのまま使用する市販ソフトウェアを指します。"
                }
            ]
        },
        {
            id: 303,
            title: "Vモデルとライフサイクルアプローチ",
            duration: "20分",
            content: `
                <h2>Vモデルとは</h2>
                <p>Vモデルは、CSVにおける開発・テストプロセスの標準的なフレームワークです。V字の左側に仕様書作成（開発フェーズ）、右側に対応するテスト（検証フェーズ）を配置し、各フェーズの対応関係を明確にします。</p>
                <p>Vモデルの核心は「各仕様レベルに対応するテストレベルが存在する」という対応関係です。これにより、テストの網羅性を保証し、トレーサビリティを確保します。</p>

                <h2>Vモデルの各フェーズ</h2>
                <table>
                    <thead>
                        <tr><th>仕様フェーズ（左側）</th><th>対応テストフェーズ（右側）</th><th>確認内容</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>URS（ユーザー要求仕様書）</td><td>PQ（性能適格性確認）</td><td>ユーザー要件が実運用で満たされるか</td></tr>
                        <tr><td>FS（機能仕様書）</td><td>OQ（運転適格性確認）</td><td>機能仕様通りに動作するか</td></tr>
                        <tr><td>DS（設計仕様書）</td><td>IQ（据付適格性確認）</td><td>設計通りに構築・設置されたか</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 ポイント</div>
                    <p>Vモデルは「概念的なフレームワーク」であり、必ずしも厳密にウォーターフォール型で実施する必要はありません。重要なのは仕様とテストの対応関係を維持することであり、開発手法自体はアジャイルでも適用可能です。</p>
                </div>

                <h2>ライフサイクルアプローチ</h2>
                <p>GAMP 5では、システムのライフサイクル全体を通じた管理を要求しています。ライフサイクルは大きく以下の4段階に分けられます。</p>

                <h3>1. コンセプト段階</h3>
                <ul>
                    <li>システムの必要性の評価</li>
                    <li>GxPインパクトアセスメント</li>
                    <li>初期リスクアセスメント</li>
                    <li>バリデーション戦略の策定</li>
                </ul>

                <h3>2. プロジェクト段階</h3>
                <ul>
                    <li>要件定義（URS作成）</li>
                    <li>設計・開発（FS/DS作成）</li>
                    <li>テスト（IQ/OQ/PQ実施）</li>
                    <li>バリデーション報告書の作成</li>
                    <li>本番リリース判定</li>
                </ul>

                <h3>3. 運用段階</h3>
                <ul>
                    <li>変更管理</li>
                    <li>インシデント管理</li>
                    <li>定期レビュー</li>
                    <li>バックアップ・復元</li>
                    <li>ユーザー教育訓練</li>
                </ul>

                <h3>4. リタイアメント段階</h3>
                <ul>
                    <li>データ移行計画</li>
                    <li>データのアーカイブ</li>
                    <li>システム廃止手順</li>
                    <li>規制記録の保管</li>
                </ul>

                <h2>ウォーターフォール vs アジャイル</h2>
                <table>
                    <thead>
                        <tr><th>項目</th><th>ウォーターフォール</th><th>アジャイル</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>開発の進め方</td><td>順次的（各フェーズを完了後に次へ）</td><td>反復的（スプリント単位で繰り返し）</td></tr>
                        <tr><td>要件変更への対応</td><td>難しい（変更管理が必要）</td><td>柔軟（各スプリントで調整可能）</td></tr>
                        <tr><td>文書化</td><td>各フェーズで完全な文書</td><td>最小限の文書（Working Softwareを重視）</td></tr>
                        <tr><td>CSV適用</td><td>Vモデルと自然に整合</td><td>スプリント内でのV活動の組み込みが必要</td></tr>
                        <tr><td>向いているシステム</td><td>要件が安定した大規模システム</td><td>要件変更が多い、段階的リリースのシステム</td></tr>
                    </tbody>
                </table>

                <div class="info-box success">
                    <div class="info-box-title">✅ まとめ</div>
                    <p>GAMP 5 Second Editionでは、アジャイル開発手法とバリデーションの両立に関するガイダンスが追加されました。重要なのは開発手法の選択ではなく、「仕様とテストの対応関係」「トレーサビリティ」「適切な文書化」が維持されることです。</p>
                </div>
            `,
            quiz: [
                {
                    id: "q303_1",
                    type: "choice",
                    question: "VモデルにおいてURS（ユーザー要求仕様書）に対応するテストはどれですか？",
                    options: [
                        "IQ（据付適格性確認）",
                        "OQ（運転適格性確認）",
                        "PQ（性能適格性確認）",
                        "単体テスト"
                    ],
                    answer: 2,
                    explanation: "VモデルではURSに対応するテストはPQ（性能適格性確認）です。PQでは、ユーザー要件が実運用条件下で満たされるかを確認します。"
                },
                {
                    id: "q303_2",
                    type: "choice",
                    question: "システムライフサイクルの正しい順序はどれですか？",
                    options: [
                        "プロジェクト → コンセプト → 運用 → リタイアメント",
                        "コンセプト → プロジェクト → リタイアメント → 運用",
                        "コンセプト → プロジェクト → 運用 → リタイアメント",
                        "運用 → コンセプト → プロジェクト → リタイアメント"
                    ],
                    answer: 2,
                    explanation: "システムライフサイクルは、コンセプト段階 → プロジェクト段階 → 運用段階 → リタイアメント段階の順に進みます。"
                },
                {
                    id: "q303_3",
                    type: "choice",
                    question: "アジャイル開発でCSVを適用する際に最も重要なことは何ですか？",
                    options: [
                        "ウォーターフォール型に変更すること",
                        "文書化を完全に省略すること",
                        "仕様とテストの対応関係とトレーサビリティの維持",
                        "各スプリントでバリデーション報告書を作成すること"
                    ],
                    answer: 2,
                    explanation: "アジャイル開発でCSVを適用する際に最も重要なのは、仕様とテストの対応関係、トレーサビリティ、適切な文書化を維持することです。開発手法自体ではなく、品質保証の原則を守ることが重要です。"
                },
                {
                    id: "q303_4",
                    type: "choice",
                    question: "運用段階で実施すべき活動に含まれないものはどれですか？",
                    options: [
                        "変更管理",
                        "定期レビュー",
                        "初期リスクアセスメント",
                        "インシデント管理"
                    ],
                    answer: 2,
                    explanation: "初期リスクアセスメントはコンセプト段階で実施する活動です。運用段階では変更管理、インシデント管理、定期レビュー、バックアップ・復元、ユーザー教育訓練を実施します。"
                },
                {
                    id: "q303_5",
                    type: "fill",
                    question: "VモデルのFS（機能仕様書）に対応するテストは何ですか？（英大文字2文字で回答）",
                    answer: "OQ",
                    explanation: "VモデルではFS（機能仕様書）に対応するテストはOQ（Operational Qualification/運転適格性確認）です。機能仕様通りにシステムが動作するかを確認します。"
                }
            ]
        },
        {
            id: 304,
            title: "リスクベースアプローチの実践",
            duration: "20分",
            content: `
                <h2>リスクベースアプローチとは</h2>
                <p>リスクベースアプローチとは、全てのシステムや機能に均一なバリデーション活動を適用するのではなく、リスクの大きさに応じてバリデーションの深度や範囲を調整するアプローチです。GAMP 5およびICH Q9の基本原則であり、現代のCSVにおける最も重要な概念の一つです。</p>
                <p>このアプローチの基盤となる考え方は「バリデーションの労力は、リスクに比例して配分すべき」ということです。高リスクの機能には厳密なバリデーション、低リスクの機能には簡略化したバリデーションを適用します。</p>

                <h2>GxPリスク分類</h2>
                <p>まず、システムがGxPに影響するかどうか（GxP Impact Assessment）を評価します。</p>
                <table>
                    <thead>
                        <tr><th>分類</th><th>定義</th><th>バリデーション要否</th><th>例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>GxP Direct Impact</td><td>GxPプロセスやデータに直接影響する</td><td>バリデーション必須</td><td>LIMS、EDC、MES</td></tr>
                        <tr><td>GxP Indirect Impact</td><td>GxPシステムを支援する</td><td>適格性確認が必要</td><td>ネットワーク機器、バックアップシステム</td></tr>
                        <tr><td>No GxP Impact</td><td>GxPに影響しない</td><td>バリデーション不要</td><td>社内ポータル、メールシステム</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 ポイント</div>
                    <p>GxP Impact Assessmentは全てのリスクアセスメントの出発点です。「このシステムはGxPに影響するか？」という問いに対する明確な回答が、バリデーション戦略全体を方向づけます。</p>
                </div>

                <h2>FMEA（Failure Mode and Effects Analysis）</h2>
                <p>FMEAは、システムの潜在的な故障モードを特定し、その影響と発生確率を評価するリスクアセスメント手法です。CSVでは機能リスクアセスメントとして広く使用されています。</p>
                <table>
                    <thead>
                        <tr><th>評価項目</th><th>説明</th><th>評価スケール例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>影響度（Severity）</td><td>故障が発生した場合の影響の大きさ</td><td>1（軽微）〜 5（致命的）</td></tr>
                        <tr><td>発生確率（Probability）</td><td>故障が発生する可能性</td><td>1（稀）〜 5（頻繁）</td></tr>
                        <tr><td>検出可能性（Detectability）</td><td>故障を事前に検出できる可能性</td><td>1（容易）〜 5（困難）</td></tr>
                    </tbody>
                </table>
                <p>RPN（Risk Priority Number）= 影響度 x 発生確率 x 検出可能性 で算出し、RPNの高い項目から優先的にリスク対策を講じます。</p>

                <h2>リスクアセスメントの手順</h2>
                <h3>Step 1：機能リストの作成</h3>
                <p>対象システムの全てのGxP関連機能をリストアップします。</p>

                <h3>Step 2：リスク特定</h3>
                <p>各機能に対して、潜在的な故障モード（何が起こり得るか）を特定します。</p>

                <h3>Step 3：リスク評価</h3>
                <p>影響度・発生確率・検出可能性を評価し、RPNを算出します。</p>

                <h3>Step 4：リスク対策の決定</h3>
                <p>RPNに基づき、以下のいずれかの対策を決定します。</p>
                <ul>
                    <li><strong>リスク回避</strong>：機能を使用しない、代替手段を採用する</li>
                    <li><strong>リスク低減</strong>：追加のバリデーション、制御機能の導入</li>
                    <li><strong>リスク受容</strong>：対策不要と判断（低リスクの場合）</li>
                    <li><strong>リスク転嫁</strong>：保険、SLAによる保証</li>
                </ul>

                <h3>Step 5：テスト戦略の決定</h3>
                <p>リスク評価の結果に基づき、テストの深度と範囲を決定します。</p>
                <table>
                    <thead>
                        <tr><th>リスクレベル</th><th>テスト戦略</th><th>テスト例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>高リスク</td><td>厳密なスクリプテッドテスト</td><td>詳細テストケース、エッジケース、異常系テスト</td></tr>
                        <tr><td>中リスク</td><td>標準的テスト</td><td>主要機能の動作確認、代表的なシナリオテスト</td></tr>
                        <tr><td>低リスク</td><td>簡略化テストまたは検証なし</td><td>スポットチェック、供給者テストの活用</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 注意</div>
                    <p>リスクアセスメントは一度実施して終わりではありません。システム変更時や定期レビュー時に見直し、リスク評価を更新する必要があります。リスクは時間の経過とともに変化する可能性があります。</p>
                </div>
            `,
            quiz: [
                {
                    id: "q304_1",
                    type: "choice",
                    question: "FMEAにおけるRPN（Risk Priority Number）の計算式として正しいものはどれですか？",
                    options: [
                        "影響度 + 発生確率 + 検出可能性",
                        "影響度 x 発生確率",
                        "影響度 x 発生確率 x 検出可能性",
                        "（影響度 + 発生確率）÷ 検出可能性"
                    ],
                    answer: 2,
                    explanation: "RPN（Risk Priority Number）= 影響度（Severity）x 発生確率（Probability）x 検出可能性（Detectability）で算出します。"
                },
                {
                    id: "q304_2",
                    type: "choice",
                    question: "GxP Direct Impactシステムに対するバリデーションの要否はどれですか？",
                    options: [
                        "バリデーション不要",
                        "簡易的な適格性確認のみ",
                        "バリデーション必須",
                        "年1回の確認のみ"
                    ],
                    answer: 2,
                    explanation: "GxP Direct Impactシステム（GxPプロセスやデータに直接影響するシステム）はバリデーションが必須です。"
                },
                {
                    id: "q304_3",
                    type: "choice",
                    question: "高リスク機能に対するテスト戦略として最も適切なものはどれですか？",
                    options: [
                        "供給者テストの活用のみ",
                        "スポットチェックによる確認",
                        "厳密なスクリプテッドテスト（エッジケース、異常系含む）",
                        "テスト省略（リスク受容）"
                    ],
                    answer: 2,
                    explanation: "高リスク機能には厳密なスクリプテッドテスト（詳細テストケース、エッジケース、異常系テスト）を実施します。"
                },
                {
                    id: "q304_4",
                    type: "choice",
                    question: "リスクアセスメントの見直しが必要なタイミングとして正しくないものはどれですか？",
                    options: [
                        "システム変更時",
                        "定期レビュー時",
                        "インシデント発生時",
                        "ユーザーの異動時のみ"
                    ],
                    answer: 3,
                    explanation: "リスクアセスメントはシステム変更時、定期レビュー時、インシデント発生時などに見直しが必要です。「ユーザーの異動時のみ」は適切なタイミングではありません。"
                },
                {
                    id: "q304_5",
                    type: "fill",
                    question: "FMEAの正式名称を英語で入力してください。（5語）",
                    answer: "Failure Mode and Effects Analysis",
                    explanation: "FMEAはFailure Mode and Effects Analysis（故障モード影響解析）の略です。CSVの機能リスクアセスメントに広く使用されています。"
                }
            ]
        }
    ]
};
