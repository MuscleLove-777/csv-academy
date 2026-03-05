const LEVEL2_DATA = {
    id: 2,
    title: "規制要件とガイドライン",
    icon: "📋",
    description: "主要な規制要件とガイドラインを理解する",
    modules: [
        {
            id: 201,
            title: "21 CFR Part 11",
            duration: "20分",
            content: `
                <h2>21 CFR Part 11の概要</h2>
                <p>21 CFR Part 11は、1997年にFDA（米国食品医薬品局）が発行した規制であり、電子記録（Electronic Records）と電子署名（Electronic Signatures）の使用に関する要件を定めています。この規制は、電子記録が紙の記録と同等の信頼性・完全性を持つための条件を規定しています。</p>
                <p>Part 11の適用を受けるのは、FDA規制下にある組織が、Predicate Rule（21 CFR Part 211等の既存規制）で要求される記録を電子形式で作成・変更・保存・検索・送信する場合です。</p>
                <p>2003年にFDAは「Scope and Application」ガイダンスを発行し、Part 11の適用範囲と、リスクベースのアプローチによる柔軟な対応を明確化しました。</p>

                <div class="info-box tip">
                    <div class="info-box-title">💡 ポイント</div>
                    <p>Part 11は全ての電子システムに適用されるわけではありません。Predicate Ruleで記録が要求されている場合に、その記録を電子形式で管理する際に適用されます。</p>
                </div>

                <h2>主要要件</h2>
                <h3>クローズドシステム要件（§11.10）</h3>
                <p>組織がアクセスを管理するシステムに対する要件です。</p>
                <table>
                    <thead>
                        <tr><th>要件項目</th><th>内容</th><th>具体的対応例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>バリデーション</td><td>システムの正確性・信頼性の保証</td><td>IQ/OQ/PQの実施</td></tr>
                        <tr><td>記録の生成と変更不能コピー</td><td>完全で正確な記録コピーの生成能力</td><td>PDF出力、監査証跡付きエクスポート</td></tr>
                        <tr><td>記録の保護</td><td>記録のライフサイクル全体にわたる保護</td><td>バックアップ、アーカイブ、暗号化</td></tr>
                        <tr><td>コンピュータ生成監査証跡</td><td>記録の作成・変更・削除の日時記録</td><td>自動Audit Trail機能</td></tr>
                        <tr><td>アクセス制限</td><td>権限に基づくシステムアクセス管理</td><td>ユーザーID/パスワード、RBAC</td></tr>
                        <tr><td>運用チェック</td><td>手順の実施順序の保証</td><td>ワークフロー制御、電子署名順序</td></tr>
                        <tr><td>権限チェック</td><td>権限ある個人のみの操作許可</td><td>権限マトリクス、ロール管理</td></tr>
                        <tr><td>デバイスチェック</td><td>データ入力元の確認</td><td>端末認証、IPアドレス制限</td></tr>
                        <tr><td>教育訓練</td><td>システム使用者への適切な教育</td><td>SOP教育、操作トレーニング</td></tr>
                        <tr><td>文書管理</td><td>システムの文書管理ポリシー</td><td>SOP、変更管理手順</td></tr>
                    </tbody>
                </table>

                <h3>オープンシステム要件（§11.30）</h3>
                <p>組織外部からのアクセスが可能なシステムには、クローズドシステムの要件に加え、データの真正性・機密性・完全性を保証するための追加措置（暗号化など）が求められます。</p>

                <h2>電子署名の要件（§11.50-11.300）</h2>
                <p>電子署名に関する主要な要件は以下のとおりです。</p>
                <ul>
                    <li><strong>署名の一意性</strong>：各個人に固有の電子署名を使用すること</li>
                    <li><strong>手書き署名との同等性</strong>：電子署名は法的に手書き署名と同等に扱われること</li>
                    <li><strong>不正使用防止</strong>：他者の電子署名の使用を防止する措置</li>
                    <li><strong>署名の構成要素</strong>：ユーザーID + パスワード（またはバイオメトリクス）</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 注意</div>
                    <p>Part 11準拠を宣言する場合、FDAに対してPart 11に基づく電子記録・電子署名の使用について文書化された方針を持つことが求められます。「Part 11対応」を安易に謳うべきではありません。</p>
                </div>
            `,
            quiz: [
                {
                    id: "q201_1",
                    type: "choice",
                    question: "21 CFR Part 11が対象とする主な内容はどれですか？",
                    options: [
                        "医薬品の製造プロセスバリデーション",
                        "電子記録と電子署名の使用要件",
                        "臨床試験のプロトコル設計",
                        "医薬品の安定性試験方法"
                    ],
                    answer: 1,
                    explanation: "21 CFR Part 11は電子記録（Electronic Records）と電子署名（Electronic Signatures）の使用に関する要件を定めた規制です。"
                },
                {
                    id: "q201_2",
                    type: "choice",
                    question: "クローズドシステムの定義として正しいものはどれですか？",
                    options: [
                        "インターネットに接続されていないスタンドアロンシステム",
                        "システム運用の責任者がアクセスを管理するシステム",
                        "暗号化されたデータのみを扱うシステム",
                        "単一のユーザーのみが使用するシステム"
                    ],
                    answer: 1,
                    explanation: "Part 11におけるクローズドシステムとは、システムのコンテンツへのアクセスを、そのシステムの運用に責任を持つ者が管理するシステムを指します。"
                },
                {
                    id: "q201_3",
                    type: "choice",
                    question: "Part 11で要求される監査証跡に関する記述として正しいものはどれですか？",
                    options: [
                        "年に1回の手動レビューで十分である",
                        "記録の作成・変更・削除の日時と実行者を自動的に記録する",
                        "システム管理者のみがアクセスできればよい",
                        "紙に印刷して保管する必要がある"
                    ],
                    answer: 1,
                    explanation: "Part 11§11.10(e)では、コンピュータが生成する監査証跡として、記録の作成・変更・削除の日時と実行者を自動的に記録することを要求しています。"
                },
                {
                    id: "q201_4",
                    type: "choice",
                    question: "2003年にFDAがPart 11に関して発行したガイダンスの主な内容はどれですか？",
                    options: [
                        "Part 11の全面的な廃止",
                        "Part 11の適用範囲の拡大",
                        "Part 11の適用範囲とリスクベースアプローチの明確化",
                        "Part 11の罰則の強化"
                    ],
                    answer: 2,
                    explanation: "2003年のFDA「Scope and Application」ガイダンスは、Part 11の適用範囲を明確化し、リスクベースのアプローチによる柔軟な対応を認めるものでした。"
                },
                {
                    id: "q201_5",
                    type: "fill",
                    question: "21 CFR Part 11の§11.10はどのようなシステムに対する要件ですか？（カタカナで回答）",
                    answer: "クローズドシステム",
                    explanation: "§11.10はクローズドシステム（組織がアクセスを管理するシステム）に対する要件を規定しています。オープンシステムは§11.30で規定されています。"
                }
            ]
        },
        {
            id: 202,
            title: "EU GMP Annex 11",
            duration: "20分",
            content: `
                <h2>EU GMP Annex 11の概要</h2>
                <p>EU GMP Annex 11「Computerised Systems」は、欧州におけるGMP環境でのコンピュータ化システムの使用に関する規制です。2011年に大幅に改訂され、現代のIT環境に対応した包括的な要件となりました。</p>
                <p>Annex 11は21 CFR Part 11と類似する部分がありますが、より実践的かつ包括的な要件を含んでいます。特にリスクマネジメント、供給者管理、データの長期保存に関する要件が充実しています。</p>
                <p>欧州市場に医薬品を供給する製薬企業は、Annex 11の要件への準拠が必須です。</p>

                <h2>Annex 11の構成</h2>
                <p>Annex 11は大きく4つのセクションに分かれています。</p>
                <table>
                    <thead>
                        <tr><th>セクション</th><th>内容</th><th>主な要件</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>General（一般要件）</td><td>リスクマネジメント、人員</td><td>リスクアセスメントの実施、訓練された人員の配置</td></tr>
                        <tr><td>Project Phase（プロジェクト段階）</td><td>バリデーション、供給者管理</td><td>ライフサイクルを通じたバリデーション、供給者の評価</td></tr>
                        <tr><td>Operational Phase（運用段階）</td><td>データ管理、セキュリティ</td><td>データの正確性チェック、アクセス管理、監査証跡</td></tr>
                        <tr><td>General Requirements（全般的要件）</td><td>事業継続性、アーカイブ</td><td>バックアップ、データ移行、電子署名</td></tr>
                    </tbody>
                </table>

                <h2>主要な要件</h2>
                <h3>リスクマネジメント（Clause 1）</h3>
                <p>リスクマネジメントはコンピュータ化システムのライフサイクル全体に適用されるべきであり、患者安全、データインテグリティ、製品品質に焦点を当てるべきとされています。</p>

                <h3>供給者とサービスプロバイダー（Clause 3）</h3>
                <p>Annex 11は供給者管理に関する明確な要件を設けています。</p>
                <ul>
                    <li>供給者の能力と信頼性の評価（供給者アセスメント/監査）</li>
                    <li>品質システムと監査に関する合意（Quality Agreement）</li>
                    <li>供給者が提供する文書の評価と保管</li>
                    <li>ソースコードの可用性に関する取り決め</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">💡 ポイント</div>
                    <p>Annex 11はPart 11と比べて供給者管理の要件が明確です。クラウドやSaaS利用が増える現在、供給者アセスメントの重要性はますます高まっています。</p>
                </div>

                <h3>監査証跡（Clause 9）</h3>
                <p>GMP関連のデータ変更は全て記録される必要があります。監査証跡には変更前の値、変更後の値、変更者、変更日時、変更理由が含まれるべきです。</p>

                <h3>データの長期保存（Clause 17）</h3>
                <p>データは保管期間全体を通じて読み取り可能な状態で維持される必要があります。技術の陳腐化に対する対策も求められます。</p>

                <h2>Part 11との比較</h2>
                <table>
                    <thead>
                        <tr><th>項目</th><th>21 CFR Part 11</th><th>EU GMP Annex 11</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>発行元</td><td>FDA（米国）</td><td>EU Commission（欧州）</td></tr>
                        <tr><td>対象</td><td>電子記録・電子署名</td><td>コンピュータ化システム全般</td></tr>
                        <tr><td>供給者管理</td><td>明示的な要件なし</td><td>詳細な要件あり</td></tr>
                        <tr><td>リスクマネジメント</td><td>間接的</td><td>明示的（Clause 1）</td></tr>
                        <tr><td>データ移行</td><td>明示的な要件なし</td><td>Clause 4.8で要求</td></tr>
                        <tr><td>事業継続性</td><td>明示的な要件なし</td><td>Clause 16で要求</td></tr>
                    </tbody>
                </table>

                <div class="info-box success">
                    <div class="info-box-title">✅ まとめ</div>
                    <p>グローバルに事業を展開する製薬企業は、Part 11とAnnex 11の両方に準拠する必要があります。Annex 11の方が包括的なため、Annex 11準拠を基盤とし、Part 11固有の要件を追加するアプローチが効率的です。</p>
                </div>
            `,
            quiz: [
                {
                    id: "q202_1",
                    type: "choice",
                    question: "EU GMP Annex 11が最後に大幅改訂された年はいつですか？",
                    options: [
                        "2003年",
                        "2008年",
                        "2011年",
                        "2016年"
                    ],
                    answer: 2,
                    explanation: "EU GMP Annex 11は2011年に大幅に改訂され、現代のIT環境に対応した包括的な要件となりました。"
                },
                {
                    id: "q202_2",
                    type: "choice",
                    question: "Annex 11が21 CFR Part 11より充実している分野はどれですか？",
                    options: [
                        "電子署名の技術要件",
                        "バイオメトリクス認証の要件",
                        "供給者管理とリスクマネジメント",
                        "ハードウェアの性能要件"
                    ],
                    answer: 2,
                    explanation: "Annex 11はPart 11と比べて、供給者管理（Clause 3）とリスクマネジメント（Clause 1）に関する要件が明確かつ充実しています。"
                },
                {
                    id: "q202_3",
                    type: "choice",
                    question: "Annex 11の監査証跡（Clause 9）に含まれるべき情報として不適切なものはどれですか？",
                    options: [
                        "変更前の値と変更後の値",
                        "変更者の氏名",
                        "変更の理由",
                        "変更者の年齢"
                    ],
                    answer: 3,
                    explanation: "監査証跡には変更前の値、変更後の値、変更者、変更日時、変更理由が含まれるべきです。変更者の年齢は不要です。"
                },
                {
                    id: "q202_4",
                    type: "choice",
                    question: "Annex 11のClause 17で要求されている内容は何ですか？",
                    options: [
                        "電子署名の管理方法",
                        "システムのパフォーマンス基準",
                        "データの長期保存と技術陳腐化への対策",
                        "ユーザー教育訓練の頻度"
                    ],
                    answer: 2,
                    explanation: "Clause 17は、データが保管期間全体を通じて読み取り可能な状態で維持されること、技術の陳腐化に対する対策を講じることを要求しています。"
                },
                {
                    id: "q202_5",
                    type: "fill",
                    question: "Annex 11で供給者との間で締結すべき品質に関する合意文書を英語で何といいますか？（2語）",
                    answer: "Quality Agreement",
                    explanation: "Quality Agreement（品質協定）は、供給者とユーザー組織間で品質システムと監査に関する合意を文書化したものです。"
                }
            ]
        },
        {
            id: 203,
            title: "厚労省ER/ES指針と日本の規制",
            duration: "15分",
            content: `
                <h2>ER/ES指針の概要</h2>
                <p>「医薬品等の承認又は許可等に係る申請等における電磁的記録及び電子署名の利用について」（通称ER/ES指針）は、2005年に厚生労働省が発出した通知です。日本版の21 CFR Part 11に相当するもので、電磁的記録（Electronic Records）と電子署名（Electronic Signatures）の使用要件を定めています。</p>
                <p>ER/ES指針は、米国のPart 11や欧州のAnnex 11を参考に策定されていますが、日本の薬事法体系に適合した独自の構成となっています。</p>
                <p>適用範囲は、薬事法（現・医薬品医療機器等法）に基づく申請・届出等に関連する記録を電磁的記録として取り扱う場合です。</p>

                <h2>ER/ES指針の主要要件</h2>
                <table>
                    <thead>
                        <tr><th>要件区分</th><th>具体的要件</th><th>対応内容</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>電磁的記録の真正性</td><td>記録の作成者・作成日時の確保</td><td>監査証跡、タイムスタンプ</td></tr>
                        <tr><td>電磁的記録の見読性</td><td>記録を人が読める形で表示・印刷</td><td>画面表示、帳票出力機能</td></tr>
                        <tr><td>電磁的記録の保存性</td><td>保存期間を通じた記録の維持</td><td>バックアップ、媒体管理</td></tr>
                        <tr><td>電子署名</td><td>署名者の本人確認と改ざん検知</td><td>認証機能、PKI</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 ポイント</div>
                    <p>ER/ES指針のキーワードは「真正性」「見読性」「保存性」の3つです。これらはデータインテグリティの基本要件と密接に関連しています。</p>
                </div>

                <h2>日本独自の規制環境</h2>
                <h3>CSV関連の日本の規制・ガイドライン</h3>
                <p>日本では、ER/ES指針以外にも以下の規制・ガイドラインがCSVに関連しています。</p>
                <table>
                    <thead>
                        <tr><th>規制/ガイドライン</th><th>発行元</th><th>概要</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>ER/ES指針</td><td>厚生労働省</td><td>電磁的記録・電子署名の使用基準</td></tr>
                        <tr><td>GMP省令（施行通知）</td><td>厚生労働省</td><td>コンピューターシステムのバリデーション要件</td></tr>
                        <tr><td>GQP省令</td><td>厚生労働省</td><td>品質管理における電子化要件</td></tr>
                        <tr><td>コンピュータ化システム適正管理ガイドライン</td><td>厚生労働省</td><td>CSV実施の具体的指針（2010年発出）</td></tr>
                        <tr><td>AMED研究班ガイダンス</td><td>AMED</td><td>最新のCSV実務ガイダンス</td></tr>
                    </tbody>
                </table>

                <h3>コンピュータ化システム適正管理ガイドライン</h3>
                <p>2010年に厚生労働省が発出した「コンピュータ化システム適正管理ガイドライン」は、日本におけるCSVの実施指針として広く活用されています。主な特徴は以下のとおりです。</p>
                <ul>
                    <li>開発業務と検証業務を明確に分離（独立した検証の要求）</li>
                    <li>システムをカテゴリ分類し、カテゴリに応じたバリデーション深度を設定</li>
                    <li>供給者監査の実施要件</li>
                    <li>変更管理と定期的な見直しの要求</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 注意</div>
                    <p>日本のCSVガイドラインはGAMP 5をベースとしつつも、独自の要件が追加されています。グローバル企業では、グローバルCSV方針と日本固有の要件の両方を満たすアプローチが必要です。</p>
                </div>

                <h2>グローバル対応のポイント</h2>
                <p>日本市場向けのCSV対応では、以下の点に留意が必要です。</p>
                <ul>
                    <li>グローバルCSV方針を基盤としつつ、日本固有の要件をローカル手順書で補完する</li>
                    <li>日本語での文書作成・レビュー体制の確保</li>
                    <li>PMDAの査察に対応できる文書体系の整備</li>
                    <li>ER/ES指針の真正性・見読性・保存性の3要件を明確に証明できること</li>
                </ul>
            `,
            quiz: [
                {
                    id: "q203_1",
                    type: "choice",
                    question: "ER/ES指針における電磁的記録の3つの基本要件として正しい組み合わせはどれですか？",
                    options: [
                        "真正性・機密性・可用性",
                        "真正性・見読性・保存性",
                        "完全性・正確性・一貫性",
                        "信頼性・追跡性・検証性"
                    ],
                    answer: 1,
                    explanation: "ER/ES指針の基本要件は「真正性」（記録の作成者・日時の確保）、「見読性」（人が読める形での表示）、「保存性」（保存期間を通じた維持）の3つです。"
                },
                {
                    id: "q203_2",
                    type: "choice",
                    question: "コンピュータ化システム適正管理ガイドラインが発出された年はいつですか？",
                    options: [
                        "2005年",
                        "2008年",
                        "2010年",
                        "2015年"
                    ],
                    answer: 2,
                    explanation: "コンピュータ化システム適正管理ガイドラインは2010年に厚生労働省から発出されました。"
                },
                {
                    id: "q203_3",
                    type: "choice",
                    question: "ER/ES指針は主にどの国の規制を参考に策定されていますか？",
                    options: [
                        "EU GMP Annex 11のみ",
                        "21 CFR Part 11のみ",
                        "PIC/Sガイダンスのみ",
                        "21 CFR Part 11とEU GMP Annex 11"
                    ],
                    answer: 3,
                    explanation: "ER/ES指針は米国のPart 11や欧州のAnnex 11を参考に策定されていますが、日本の薬事法体系に適合した独自の構成となっています。"
                },
                {
                    id: "q203_4",
                    type: "choice",
                    question: "コンピュータ化システム適正管理ガイドラインの特徴として正しくないものはどれですか？",
                    options: [
                        "開発業務と検証業務の分離を要求",
                        "カテゴリに応じたバリデーション深度の設定",
                        "全てのシステムに同一レベルのバリデーションを要求",
                        "供給者監査の実施要件"
                    ],
                    answer: 2,
                    explanation: "コンピュータ化システム適正管理ガイドラインでは、システムをカテゴリ分類し、カテゴリに応じたバリデーション深度を設定することを推奨しています。全てのシステムに同一レベルのバリデーションを要求するのは正しくありません。"
                },
                {
                    id: "q203_5",
                    type: "fill",
                    question: "ER/ES指針の「ER」は何の略ですか？（英語2語で回答）",
                    answer: "Electronic Records",
                    explanation: "ER/ESはElectronic Records / Electronic Signatures（電磁的記録/電子署名）の略です。"
                }
            ]
        },
        {
            id: 204,
            title: "PIC/Sガイダンスとグローバル動向",
            duration: "15分",
            content: `
                <h2>PIC/Sとは</h2>
                <p>PIC/S（Pharmaceutical Inspection Co-operation Scheme）は、各国のGMP査察当局間の協力と調和を推進する国際的な枠組みです。2023年現在、50以上の規制当局が加盟しています。日本のPMDAは2014年にPIC/Sに加盟しました。</p>
                <p>PIC/Sの目的は、GMP査察の基準や手法を国際的に統一し、相互承認を促進することです。これにより、各国の査察の重複を減らし、効率的な品質保証体制を構築することを目指しています。</p>

                <h2>PIC/S PI 011-3</h2>
                <p>PIC/S PI 011-3「Good Practices for Computerised Systems in Regulated 'GXP' Environments」は、GxP環境におけるコンピュータ化システムのグッドプラクティスを定めたガイダンスです。</p>
                <table>
                    <thead>
                        <tr><th>セクション</th><th>内容</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Part I</td><td>査察官向けのガイダンス（システム査察のポイント）</td></tr>
                        <tr><td>Part II</td><td>査察対象者向けのガイダンス（準拠すべき要件）</td></tr>
                        <tr><td>Annex</td><td>データインテグリティに関する詳細ガイダンス</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 ポイント</div>
                    <p>PIC/Sガイダンスは法的拘束力はありませんが、加盟国の査察官が参照するため、実質的に査察の基準となっています。日本のPMDA査察もPIC/Sの基準に基づいて実施されます。</p>
                </div>

                <h2>WHOのガイダンス</h2>
                <p>WHO（世界保健機関）もコンピュータ化システムのバリデーションに関するガイダンスを発行しています。WHO Technical Report Series No.996 Annex 5「Guidance on Good Data and Record Management Practices」は、データインテグリティとコンピュータ化システム管理に関する包括的なガイダンスです。</p>
                <p>WHOのガイダンスは特に新興国の規制当局に大きな影響を与えており、グローバル展開する企業は参照が必要です。</p>

                <h2>ICHの動向</h2>
                <p>ICH（International Council for Harmonisation）は、医薬品規制の国際調和を推進する組織です。CSV直接のガイドラインはありませんが、以下のICHガイドラインがCSVに関連しています。</p>
                <table>
                    <thead>
                        <tr><th>ICHガイドライン</th><th>関連性</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>ICH Q9 品質リスクマネジメント</td><td>CSVにおけるリスクベースアプローチの基盤</td></tr>
                        <tr><td>ICH Q10 医薬品品質システム</td><td>品質システム内でのCSVの位置づけ</td></tr>
                        <tr><td>ICH E6(R2) GCP</td><td>臨床試験におけるコンピュータ化システムの要件</td></tr>
                        <tr><td>ICH Q12 ライフサイクルマネジメント</td><td>製品ライフサイクルにおけるシステム管理</td></tr>
                    </tbody>
                </table>

                <h2>グローバルCSVのトレンド</h2>
                <p>現在のグローバルCSVにおける主要なトレンドは以下のとおりです。</p>
                <ul>
                    <li><strong>CSAへの転換</strong>：文書中心からCritical Thinkingベースへ</li>
                    <li><strong>クラウドバリデーション</strong>：SaaS/PaaSの普及に伴う新しいアプローチ</li>
                    <li><strong>データインテグリティの重視</strong>：ALCOA+原則の徹底</li>
                    <li><strong>アジャイル開発への対応</strong>：従来のVモデルからの脱却</li>
                    <li><strong>AI/ML対応</strong>：機械学習モデルのバリデーション手法の確立</li>
                </ul>

                <div class="info-box success">
                    <div class="info-box-title">✅ まとめ</div>
                    <p>グローバルCSVは規制の調和が進みつつも、各地域固有の要件が存在します。PIC/S、WHO、ICHの動向を把握し、グローバルに整合性のあるCSV戦略を構築することが重要です。</p>
                </div>
            `,
            quiz: [
                {
                    id: "q204_1",
                    type: "choice",
                    question: "日本のPMDAがPIC/Sに加盟した年はいつですか？",
                    options: [
                        "2008年",
                        "2011年",
                        "2014年",
                        "2018年"
                    ],
                    answer: 2,
                    explanation: "日本のPMDAは2014年にPIC/Sに加盟しました。これにより、日本のGMP査察もPIC/Sの基準に基づいて実施されるようになりました。"
                },
                {
                    id: "q204_2",
                    type: "choice",
                    question: "PIC/Sの主な目的として正しいものはどれですか？",
                    options: [
                        "医薬品の価格を国際的に統一すること",
                        "GMP査察の基準や手法を国際的に統一すること",
                        "医薬品の開発期間を短縮すること",
                        "臨床試験のデザインを標準化すること"
                    ],
                    answer: 1,
                    explanation: "PIC/Sの目的はGMP査察の基準や手法を国際的に統一し、相互承認を促進することです。"
                },
                {
                    id: "q204_3",
                    type: "choice",
                    question: "ICH Q9は何に関するガイドラインですか？",
                    options: [
                        "電子記録・電子署名",
                        "品質リスクマネジメント",
                        "臨床試験実施基準",
                        "安定性試験"
                    ],
                    answer: 1,
                    explanation: "ICH Q9は品質リスクマネジメントに関するガイドラインです。CSVにおけるリスクベースアプローチの基盤として参照されています。"
                },
                {
                    id: "q204_4",
                    type: "choice",
                    question: "現在のグローバルCSVのトレンドとして含まれないものはどれですか？",
                    options: [
                        "CSAへの転換",
                        "クラウドバリデーション",
                        "全システムへの画一的なバリデーション強化",
                        "AI/MLモデルのバリデーション"
                    ],
                    answer: 2,
                    explanation: "全システムへの画一的なバリデーション強化は現在のトレンドではありません。むしろCSA（Critical Thinking）やリスクベースアプローチにより、リスクに応じた効率的なバリデーションが求められています。"
                },
                {
                    id: "q204_5",
                    type: "fill",
                    question: "PIC/Sの正式名称は「Pharmaceutical Inspection Co-operation ___」です。空欄に入る英語1語を入力してください。",
                    answer: "Scheme",
                    explanation: "PIC/Sの正式名称はPharmaceutical Inspection Co-operation Schemeです。"
                }
            ]
        }
    ]
};
