const LEVEL4_DATA = {
    id: 4,
    title: "バリデーション計画と文書",
    icon: "📝",
    description: "バリデーション計画と文書体系を理解する",
    modules: [
        {
            id: 401,
            title: "バリデーションマスタープラン",
            duration: "15分",
            content: `
                <h2>VMP（Validation Master Plan）とは</h2>
                <p>バリデーションマスタープラン（VMP）は、組織全体のバリデーション活動に関する方針、戦略、アプローチを定義するトップレベルの文書です。VMPは個別のシステムではなく、組織全体のバリデーション体制をカバーします。</p>
                <p>VMPは品質マネジメントシステムの一部として位置づけられ、経営層の承認を得て運用されます。全てのバリデーション活動はVMPに基づいて計画・実施されます。</p>
                <p>EU GMP Annex 15やPIC/Sガイダンスでも、VMPの作成が明示的に要求されています。</p>

                <h2>VMPの記載項目</h2>
                <table>
                    <thead>
                        <tr><th>セクション</th><th>記載内容</th><th>ポイント</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>目的と適用範囲</td><td>VMPの目的、適用対象システム/サイト</td><td>GxPシステムの範囲を明確に</td></tr>
                        <tr><td>組織と責任</td><td>バリデーション組織体制、役割と責任</td><td>品質部門・IT部門・ビジネス部門の役割</td></tr>
                        <tr><td>バリデーション方針</td><td>リスクベースアプローチ、カテゴリ分類基準</td><td>GAMP 5準拠の方針を明記</td></tr>
                        <tr><td>文書体系</td><td>使用する文書の種類とテンプレート</td><td>URS、FS、DS、テストプロトコル等</td></tr>
                        <tr><td>ライフサイクル管理</td><td>変更管理、定期レビュー、リタイアメント</td><td>運用段階のプロセスも含める</td></tr>
                        <tr><td>供給者管理</td><td>供給者アセスメント/監査方針</td><td>評価基準とプロセス</td></tr>
                        <tr><td>教育訓練</td><td>CSV関連の教育訓練プログラム</td><td>対象者と頻度</td></tr>
                        <tr><td>システムインベントリ</td><td>GxPシステム一覧と分類</td><td>GxP Impact分類とカテゴリ</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 ポイント</div>
                    <p>VMPは「生きた文書」です。組織の変更、新しい規制の発出、技術の進化に合わせて定期的に見直し・更新することが重要です。形骸化したVMPは査察で指摘の対象となります。</p>
                </div>

                <h2>VP（Validation Plan）との違い</h2>
                <p>VMPが組織全体の方針を定めるのに対し、VP（Validation Plan）は個別システムのバリデーション計画を定めます。</p>
                <table>
                    <thead>
                        <tr><th>項目</th><th>VMP</th><th>VP</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>対象範囲</td><td>組織全体</td><td>個別システム</td></tr>
                        <tr><td>承認者</td><td>経営層/品質責任者</td><td>プロジェクト責任者/品質部門</td></tr>
                        <tr><td>更新頻度</td><td>年次レビュー/重大変更時</td><td>プロジェクト開始時に作成</td></tr>
                        <tr><td>記載内容</td><td>方針、戦略、組織体制</td><td>テスト計画、スケジュール、判定基準</td></tr>
                    </tbody>
                </table>

                <h2>承認プロセス</h2>
                <p>VMPの承認には複数の関係者の関与が必要です。</p>
                <ul>
                    <li><strong>作成者</strong>：CSV担当部門（品質部門またはIT部門）</li>
                    <li><strong>レビュアー</strong>：関連部門（IT、品質保証、製造等）</li>
                    <li><strong>承認者</strong>：品質責任者（QP/Quality Head）</li>
                    <li><strong>最終承認</strong>：サイト責任者または経営層</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 注意</div>
                    <p>VMPに記載された方針とは異なる実務を行っている場合（例：VMPではリスクベースと記載しているが実際は全システム同一レベルでバリデーション）、査察で重大な指摘を受ける可能性があります。VMPと実務の整合性を常に確保してください。</p>
                </div>
            `,
            quiz: [
                {
                    id: "q401_1",
                    type: "choice",
                    question: "VMPの対象範囲として正しいものはどれですか？",
                    options: [
                        "特定の1つのシステム",
                        "ITインフラのみ",
                        "組織全体のバリデーション活動",
                        "製造システムのみ"
                    ],
                    answer: 2,
                    explanation: "VMP（Validation Master Plan）は組織全体のバリデーション活動に関する方針、戦略、アプローチを定義するトップレベルの文書です。"
                },
                {
                    id: "q401_2",
                    type: "choice",
                    question: "VMPとVPの違いについて正しいものはどれですか？",
                    options: [
                        "VMPは個別システム、VPは組織全体を対象とする",
                        "VMPは組織全体の方針、VPは個別システムの計画を対象とする",
                        "VMPとVPは同じ文書の別名である",
                        "VMPは運用段階、VPは開発段階の文書である"
                    ],
                    answer: 1,
                    explanation: "VMPは組織全体のバリデーション方針を定め、VP（Validation Plan）は個別システムのバリデーション計画を定めます。VMPはVPの上位文書です。"
                },
                {
                    id: "q401_3",
                    type: "choice",
                    question: "VMPの承認者として最も適切な人物はどれですか？",
                    options: [
                        "システム開発者",
                        "エンドユーザー代表",
                        "品質責任者/サイト責任者",
                        "外部監査人"
                    ],
                    answer: 2,
                    explanation: "VMPの承認は品質責任者（QP/Quality Head）やサイト責任者など、組織の品質方針に責任を持つ経営層が行います。"
                },
                {
                    id: "q401_4",
                    type: "choice",
                    question: "VMPに含まれるべき項目として正しくないものはどれですか？",
                    options: [
                        "バリデーション方針とカテゴリ分類基準",
                        "組織体制と役割・責任",
                        "個別システムのテストケース詳細",
                        "供給者管理方針"
                    ],
                    answer: 2,
                    explanation: "個別システムのテストケース詳細はVP（個別バリデーション計画）やテストプロトコルに記載します。VMPは組織全体の方針レベルの文書です。"
                },
                {
                    id: "q401_5",
                    type: "fill",
                    question: "VMPの略称を英語のフルスペルで記入してください。（3語）",
                    answer: "Validation Master Plan",
                    explanation: "VMPはValidation Master Plan（バリデーションマスタープラン）の略です。"
                }
            ]
        },
        {
            id: 402,
            title: "URS・FS・DS",
            duration: "20分",
            content: `
                <h2>仕様書体系の概要</h2>
                <p>CSVにおける仕様書体系は、ユーザーの要求からシステムの詳細設計までを段階的に詳細化していく構造になっています。各仕様書は上位の仕様書から導出され、トレーサビリティが確保されます。</p>
                <p>仕様書体系の核心は「要件の段階的詳細化」と「トレーサビリティの確保」にあります。</p>

                <h2>URS（ユーザー要求仕様書）</h2>
                <p>URS（User Requirement Specification）は、ユーザーがシステムに求める要件を記述した文書です。CSVの出発点であり、最も重要な文書の一つです。</p>
                <h3>URSの記載項目</h3>
                <table>
                    <thead>
                        <tr><th>カテゴリ</th><th>記載内容の例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>業務要件</td><td>システムが支援する業務プロセス、ワークフロー</td></tr>
                        <tr><td>機能要件</td><td>必要な機能（データ入力、計算、レポート出力等）</td></tr>
                        <tr><td>データ要件</td><td>扱うデータの種類、形式、量</td></tr>
                        <tr><td>規制要件</td><td>21 CFR Part 11、Annex 11等の規制準拠要件</td></tr>
                        <tr><td>インターフェース要件</td><td>他システムとの連携要件</td></tr>
                        <tr><td>セキュリティ要件</td><td>アクセス管理、監査証跡要件</td></tr>
                        <tr><td>性能要件</td><td>応答時間、同時接続数、可用性</td></tr>
                        <tr><td>運用要件</td><td>バックアップ、障害復旧、保守</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 ポイント</div>
                    <p>URSは「何を（What）」を記述し、「どのように（How）」は記述しません。実装方法に踏み込まず、ユーザーの視点からシステムに求める要件を記述することが重要です。</p>
                </div>

                <h2>FS（機能仕様書）</h2>
                <p>FS（Functional Specification）は、URSの要件を実現するためのシステム機能を記述した文書です。URSの「何を」に対して「どのような機能で実現するか」を定義します。</p>
                <h3>FSの記載項目</h3>
                <ul>
                    <li>システム概要とアーキテクチャ</li>
                    <li>各機能の詳細説明（入力・処理・出力）</li>
                    <li>画面レイアウトとユーザーインターフェース</li>
                    <li>データモデルとデータベース構造</li>
                    <li>システムインターフェース仕様</li>
                    <li>セキュリティ機能の詳細</li>
                    <li>エラーハンドリングと例外処理</li>
                </ul>

                <h2>DS（設計仕様書）</h2>
                <p>DS（Design Specification）は、FSの機能をどのように実装するかの技術的詳細を記述した文書です。主にCategory 5（カスタム開発）のソフトウェアで必要となります。</p>
                <h3>DSの記載項目</h3>
                <ul>
                    <li>プログラム構造とモジュール設計</li>
                    <li>データベースの物理設計</li>
                    <li>アルゴリズムの詳細</li>
                    <li>API仕様</li>
                    <li>セキュリティの実装方式</li>
                </ul>

                <h2>仕様書間の関係性</h2>
                <table>
                    <thead>
                        <tr><th>仕様書</th><th>視点</th><th>問い</th><th>対応テスト</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>URS</td><td>ユーザー視点</td><td>何が必要か？</td><td>PQ</td></tr>
                        <tr><td>FS</td><td>機能視点</td><td>どんな機能で実現するか？</td><td>OQ</td></tr>
                        <tr><td>DS</td><td>技術視点</td><td>どう実装するか？</td><td>IQ/単体テスト</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 注意</div>
                    <p>Category 3（非構成製品）の場合、FSとDSは供給者の文書で代替できる場合があります。全てのシステムでURS/FS/DSの3文書が必須というわけではなく、カテゴリとリスクに応じて必要な文書を判断してください。</p>
                </div>
            `,
            quiz: [
                {
                    id: "q402_1",
                    type: "choice",
                    question: "URSに記述すべき内容として最も適切なものはどれですか？",
                    options: [
                        "データベースの物理設計の詳細",
                        "プログラムのソースコード",
                        "ユーザーがシステムに求める要件",
                        "テストケースの詳細手順"
                    ],
                    answer: 2,
                    explanation: "URS（ユーザー要求仕様書）はユーザーがシステムに求める要件を記述する文書です。「何を（What）」を記述し、実装方法の詳細は含みません。"
                },
                {
                    id: "q402_2",
                    type: "choice",
                    question: "URS→FS→DSの関係として正しいものはどれですか？",
                    options: [
                        "同じ内容を異なるフォーマットで記述する",
                        "段階的に詳細化していく（要件→機能→実装）",
                        "全て同時に作成する並行文書である",
                        "DSを先に作成し、URSを最後に作成する"
                    ],
                    answer: 1,
                    explanation: "仕様書体系はURS（何が必要か）→FS（どんな機能で実現するか）→DS（どう実装するか）と段階的に詳細化していきます。"
                },
                {
                    id: "q402_3",
                    type: "choice",
                    question: "Category 3のシステムで通常必要な仕様書はどれですか？",
                    options: [
                        "URS、FS、DSの全て",
                        "URSのみ（FSとDSは供給者文書で代替可能）",
                        "DSのみ",
                        "仕様書は一切不要"
                    ],
                    answer: 1,
                    explanation: "Category 3（非構成製品）の場合、URSは必要ですが、FSとDSは供給者の文書で代替できる場合があります。"
                },
                {
                    id: "q402_4",
                    type: "choice",
                    question: "FSに記述する内容として最も適切なものはどれですか？",
                    options: [
                        "ユーザーの業務要件のみ",
                        "システム機能の詳細（入力・処理・出力）",
                        "プログラムのアルゴリズム詳細",
                        "テスト結果のサマリー"
                    ],
                    answer: 1,
                    explanation: "FS（機能仕様書）は、URSの要件を実現するためのシステム機能を記述します。各機能の入力・処理・出力、画面レイアウト、データモデルなどを含みます。"
                },
                {
                    id: "q402_5",
                    type: "fill",
                    question: "FSの正式名称を英語で入力してください。（2語）",
                    answer: "Functional Specification",
                    explanation: "FSはFunctional Specification（機能仕様書）の略です。URSの要件を実現するためのシステム機能を記述します。"
                }
            ]
        },
        {
            id: 403,
            title: "IQ/OQ/PQ",
            duration: "20分",
            content: `
                <h2>適格性確認の概要</h2>
                <p>IQ/OQ/PQは、コンピューターシステムが要件を満たすことを段階的に確認するテストプロセスです。各段階には明確な目的と確認内容があり、前段階の完了が次段階の前提条件となります。</p>
                <p>テストは「テストプロトコル」に基づいて実施され、結果は「テストレポート」に記録されます。テストの計画、実施、レビューは独立した担当者が行うことが望ましいとされています。</p>

                <h2>IQ（据付適格性確認）</h2>
                <p>IQ（Installation Qualification）は、システムが設計仕様書（DS）に従って正しく設置・構成されたことを確認するテストです。</p>
                <table>
                    <thead>
                        <tr><th>確認項目</th><th>確認内容の例</th><th>判定基準例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>ハードウェア</td><td>サーバー仕様、ネットワーク構成</td><td>設計書と一致</td></tr>
                        <tr><td>ソフトウェア</td><td>OS、アプリケーション、パッチレベル</td><td>指定バージョンがインストール済み</td></tr>
                        <tr><td>環境設定</td><td>データベース設定、ネットワーク設定</td><td>設計書通りに構成</td></tr>
                        <tr><td>ドキュメント</td><td>マニュアル、設計文書の存在</td><td>必要な文書が揃っている</td></tr>
                        <tr><td>セキュリティ</td><td>初期アカウント、パスワードポリシー</td><td>セキュリティ方針に準拠</td></tr>
                    </tbody>
                </table>

                <h2>OQ（運転適格性確認）</h2>
                <p>OQ（Operational Qualification）は、システムが機能仕様書（FS）に従って正しく動作することを確認するテストです。</p>
                <table>
                    <thead>
                        <tr><th>テスト種別</th><th>内容</th><th>例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>正常系テスト</td><td>正常な入力に対する正しい処理の確認</td><td>データ登録→保存→検索が正常動作</td></tr>
                        <tr><td>異常系テスト</td><td>異常な入力に対する適切なエラー処理</td><td>必須項目未入力時のエラーメッセージ表示</td></tr>
                        <tr><td>境界値テスト</td><td>入力値の上限・下限での動作確認</td><td>文字数上限での登録、日付の範囲チェック</td></tr>
                        <tr><td>セキュリティテスト</td><td>アクセス制御の動作確認</td><td>権限外操作の拒否確認</td></tr>
                        <tr><td>監査証跡テスト</td><td>Audit Trailの記録確認</td><td>データ変更時の履歴記録確認</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 ポイント</div>
                    <p>OQは最もテスト量が多い段階です。リスクベースアプローチにより、高リスク機能に重点を置いたテスト戦略を策定することで、効率的なOQを実現できます。</p>
                </div>

                <h2>PQ（性能適格性確認）</h2>
                <p>PQ（Performance Qualification）は、実運用条件下でシステムがユーザー要件（URS）を満たすことを確認するテストです。</p>
                <table>
                    <thead>
                        <tr><th>テスト種別</th><th>内容</th><th>例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>エンドツーエンドテスト</td><td>業務シナリオに基づく一連の操作テスト</td><td>検体受入→測定→結果入力→承認→レポート</td></tr>
                        <tr><td>負荷テスト</td><td>想定最大負荷での性能確認</td><td>同時100ユーザーアクセス時の応答時間</td></tr>
                        <tr><td>データ移行テスト</td><td>既存データの移行結果確認</td><td>移行前後のデータ件数・整合性確認</td></tr>
                        <tr><td>インターフェーステスト</td><td>他システムとの連携確認</td><td>LIMS→ERP連携のデータ送受信確認</td></tr>
                    </tbody>
                </table>

                <h2>テストプロトコルとレポート</h2>
                <h3>テストプロトコルの構成</h3>
                <ul>
                    <li>テスト目的と対象範囲</li>
                    <li>前提条件とテスト環境</li>
                    <li>テストケース（手順、期待結果、判定基準）</li>
                    <li>合格基準</li>
                    <li>逸脱対応手順</li>
                    <li>承認（作成者、レビュアー、承認者の署名）</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 注意</div>
                    <p>テスト中に逸脱（期待結果と異なる結果）が発生した場合は、逸脱記録を作成し、原因調査と影響評価を実施する必要があります。逸脱を無視してテストを進めることは許されません。</p>
                </div>
            `,
            quiz: [
                {
                    id: "q403_1",
                    type: "choice",
                    question: "OQで実施すべきテストとして正しくないものはどれですか？",
                    options: [
                        "正常系テスト",
                        "異常系テスト",
                        "データ移行テスト",
                        "境界値テスト"
                    ],
                    answer: 2,
                    explanation: "データ移行テストは通常PQ（性能適格性確認）の段階で実施します。OQでは正常系、異常系、境界値テスト、セキュリティテスト、監査証跡テストを実施します。"
                },
                {
                    id: "q403_2",
                    type: "choice",
                    question: "IQの主な確認対象はどれですか？",
                    options: [
                        "業務シナリオに基づく一連の操作",
                        "システムの性能と負荷耐性",
                        "ハードウェア/ソフトウェアの設置と構成",
                        "ユーザー教育の実施状況"
                    ],
                    answer: 2,
                    explanation: "IQ（据付適格性確認）はハードウェア/ソフトウェアが設計仕様書に従って正しく設置・構成されたことを確認します。"
                },
                {
                    id: "q403_3",
                    type: "choice",
                    question: "PQの特徴として最も適切なものはどれですか？",
                    options: [
                        "設計書に基づく技術的な検証",
                        "実運用条件下でユーザー要件が満たされることの確認",
                        "ソフトウェアの設置確認",
                        "コードレビューの実施"
                    ],
                    answer: 1,
                    explanation: "PQ（性能適格性確認）は実運用条件下でシステムがユーザー要件（URS）を満たすことを確認するテストです。エンドツーエンドテストや負荷テストを含みます。"
                },
                {
                    id: "q403_4",
                    type: "choice",
                    question: "テスト中に逸脱が発生した場合の正しい対応はどれですか？",
                    options: [
                        "テストを中断し全てやり直す",
                        "逸脱を無視してテストを続行する",
                        "逸脱記録を作成し原因調査と影響評価を実施する",
                        "テスト担当者を交代する"
                    ],
                    answer: 2,
                    explanation: "テスト中に逸脱が発生した場合は、逸脱記録を作成し、原因調査と影響評価を実施する必要があります。逸脱の無視や無条件の中断は適切ではありません。"
                },
                {
                    id: "q403_5",
                    type: "fill",
                    question: "PQの英語のフルスペルを入力してください。（2語）",
                    answer: "Performance Qualification",
                    explanation: "PQはPerformance Qualification（性能適格性確認）の略です。実運用条件下での性能発揮を確認します。"
                }
            ]
        },
        {
            id: 404,
            title: "トレーサビリティマトリクスの作成",
            duration: "15分",
            content: `
                <h2>トレーサビリティマトリクスとは</h2>
                <p>トレーサビリティマトリクス（RTM: Requirements Traceability Matrix）は、ユーザー要件（URS）から仕様書（FS/DS）、テスト（IQ/OQ/PQ）までの追跡関係を一覧化した文書です。全ての要件が適切にテストされていることを証明する重要なツールです。</p>
                <p>トレーサビリティマトリクスは「抜け」と「漏れ」を防ぐための文書です。要件に対応するテストがない場合（テスト漏れ）や、要件に紐づかないテストがある場合（不要なテスト）を特定できます。</p>

                <h2>トレーサビリティの方向</h2>
                <table>
                    <thead>
                        <tr><th>方向</th><th>名称</th><th>目的</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>URS → FS → DS → テスト</td><td>フォワードトレーサビリティ</td><td>全ての要件がテストされていることの確認</td></tr>
                        <tr><td>テスト → DS → FS → URS</td><td>バックワードトレーサビリティ</td><td>全てのテストが要件に紐づいていることの確認</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 ポイント</div>
                    <p>双方向のトレーサビリティを確保することで、要件の網羅性とテストの妥当性を同時に確認できます。査察ではトレーサビリティマトリクスが特に注目されるポイントです。</p>
                </div>

                <h2>マトリクスの構成例</h2>
                <table>
                    <thead>
                        <tr><th>URS ID</th><th>URS要件</th><th>FS ID</th><th>DS ID</th><th>テストID</th><th>テスト結果</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>URS-001</td><td>ユーザーIDとPWでログインできること</td><td>FS-101</td><td>DS-201</td><td>OQ-001</td><td>合格</td></tr>
                        <tr><td>URS-002</td><td>データ変更時に監査証跡が記録されること</td><td>FS-102</td><td>DS-202</td><td>OQ-005</td><td>合格</td></tr>
                        <tr><td>URS-003</td><td>電子署名にはID+PW+理由が必要</td><td>FS-103</td><td>DS-203</td><td>OQ-008</td><td>合格</td></tr>
                        <tr><td>URS-004</td><td>日次バックアップが自動実行されること</td><td>FS-201</td><td>DS-301</td><td>OQ-012</td><td>合格</td></tr>
                        <tr><td>URS-005</td><td>100ユーザー同時接続で応答3秒以内</td><td>FS-301</td><td>-</td><td>PQ-003</td><td>合格</td></tr>
                    </tbody>
                </table>

                <h2>作成のベストプラクティス</h2>
                <ul>
                    <li><strong>早期着手</strong>：URS作成段階からIDを付与し、マトリクスの準備を始める</li>
                    <li><strong>一意のID体系</strong>：各文書に一意のIDを付与し、参照を容易にする</li>
                    <li><strong>定期更新</strong>：要件変更やテスト追加時にマトリクスも更新する</li>
                    <li><strong>ツールの活用</strong>：Excel、専用ツール（ALM、JIRA等）を活用して管理する</li>
                    <li><strong>ギャップ分析</strong>：テスト前にマトリクスを確認し、漏れがないか検証する</li>
                </ul>

                <h2>作成ツール</h2>
                <table>
                    <thead>
                        <tr><th>ツール</th><th>特徴</th><th>適用場面</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Excel/スプレッドシート</td><td>手軽、カスタマイズ自由</td><td>小〜中規模システム</td></tr>
                        <tr><td>HP ALM / Micro Focus ALM</td><td>要件管理からテスト管理まで一貫</td><td>大規模システム</td></tr>
                        <tr><td>Jira + Xray / Zephyr</td><td>アジャイル対応、柔軟な管理</td><td>アジャイル開発プロジェクト</td></tr>
                        <tr><td>Polarion / DOORS</td><td>高度な要件管理とトレーサビリティ</td><td>規制産業の大規模プロジェクト</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 注意</div>
                    <p>トレーサビリティマトリクスは作成後に放置されがちです。要件変更やテスト追加の都度、マトリクスを更新する運用プロセスを確立してください。最新でないマトリクスは査察で信頼性を問われます。</p>
                </div>
            `,
            quiz: [
                {
                    id: "q404_1",
                    type: "choice",
                    question: "トレーサビリティマトリクスの主な目的はどれですか？",
                    options: [
                        "テストの実行スケジュールを管理する",
                        "全ての要件が適切にテストされていることを証明する",
                        "テスト担当者のパフォーマンスを評価する",
                        "システムの運用コストを算出する"
                    ],
                    answer: 1,
                    explanation: "トレーサビリティマトリクスの主な目的は、全ての要件がテストされていること（フォワード）と、全てのテストが要件に紐づいていること（バックワード）を証明することです。"
                },
                {
                    id: "q404_2",
                    type: "choice",
                    question: "フォワードトレーサビリティの方向として正しいものはどれですか？",
                    options: [
                        "テスト → URS",
                        "URS → FS → DS → テスト",
                        "DS → FS → URS",
                        "テスト → DS → FS"
                    ],
                    answer: 1,
                    explanation: "フォワードトレーサビリティはURS → FS → DS → テストの方向で、全ての要件がテストされていることを確認します。"
                },
                {
                    id: "q404_3",
                    type: "choice",
                    question: "トレーサビリティマトリクス作成のベストプラクティスとして正しくないものはどれですか？",
                    options: [
                        "URS作成段階からIDを付与して準備する",
                        "テスト完了後に一度だけ作成する",
                        "要件変更時にマトリクスも更新する",
                        "ツールを活用して管理する"
                    ],
                    answer: 1,
                    explanation: "トレーサビリティマトリクスはテスト完了後に一度作成するのではなく、URS作成段階から早期に着手し、プロジェクト全体を通じて継続的に更新すべきです。"
                },
                {
                    id: "q404_4",
                    type: "choice",
                    question: "マトリクスのギャップ分析で発見できる問題はどれですか？",
                    options: [
                        "テスト環境のハードウェア不具合",
                        "要件に対応するテストがない（テスト漏れ）",
                        "テスト担当者のスキル不足",
                        "システムのパフォーマンス問題"
                    ],
                    answer: 1,
                    explanation: "マトリクスのギャップ分析により、要件に対応するテストがない（テスト漏れ）や、要件に紐づかないテスト（不要なテスト）を特定できます。"
                },
                {
                    id: "q404_5",
                    type: "fill",
                    question: "トレーサビリティマトリクスの英語略称は何ですか？（英大文字3文字）",
                    answer: "RTM",
                    explanation: "RTMはRequirements Traceability Matrix（要件トレーサビリティマトリクス）の略です。"
                }
            ]
        }
    ]
};
