<%-- SPG:

This HTML file has been associated with a SharePoint Page Layout (.aspx file) carrying the same name.  While the files remain associated, you will not be allowed to edit the .aspx file, and any rename, move, or deletion operations will be reciprocated.

To build the page layout directly from this HTML file, simply fill in the contents of content placeholders.  Use the Snippet Generator at http://safea0zbmsp01:18000/_layouts/15/ComponentHome.aspx?Url=http%3A%2F%2Fsafea0zbmsp01%3A18000%2F%5Fcatalogs%2Fmasterpage%2Ffoundation%2Forbit%2Easpx to create and customize additional content placeholders and other useful SharePoint entities, then copy and paste them as HTML snippets into your HTML code.   All updates to this file within content placeholders will automatically sync to the associated page layout.

 --%>
<%@Page language="C#" Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage, Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="PageFieldFieldValue" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="Publishing" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<%@Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
<asp:Content runat="server" ContentPlaceHolderID="PlaceHolderPageTitle">
            <SharePoint:ProjectProperty Property="Title" runat="server">
            </SharePoint:ProjectProperty>
            
            
            <PageFieldFieldValue:FieldValue FieldName="fa564e0f-0c70-4ab9-b863-0177e6ddd247" runat="server">
            </PageFieldFieldValue:FieldValue>
            
        </asp:Content><asp:Content runat="server" ContentPlaceHolderID="PlaceHolderAdditionalPageHead">
            
            
            
            <Publishing:EditModePanel runat="server" id="editmodestyles">
                <SharePoint:CssRegistration name="&lt;% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %&gt;" After="&lt;% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %&gt;" runat="server">
                </SharePoint:CssRegistration>
            </Publishing:EditModePanel>
            
        </asp:Content><asp:Content runat="server" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea">
            
            
            <PageFieldFieldValue:FieldValue FieldName="fa564e0f-0c70-4ab9-b863-0177e6ddd247" runat="server">
            </PageFieldFieldValue:FieldValue>
            
        </asp:Content><asp:Content runat="server" ContentPlaceHolderID="PlaceHolderMain">
            <div class="row">
                <div class="large-12 columns">
                    <!-- Main Banner Image - place in a paragraph to enforce the modular scale spacing -->
                    
                    <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="foundationRow1" Title="foundationRow1" FrameType="None" Orientation="Vertical">
                        <ZoneTemplate>
                            
                        </ZoneTemplate>
                    </WebPartPages:WebPartZone>
                </div>
            </div>
            <!-- Three-up Content Blocks -->
            <div class="row">
                <div class="large-4 columns">
                    
                    <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="foundationRow2Col1" Title="foundationRow2Col1" FrameType="None" Orientation="Vertical">
                        <ZoneTemplate>
                            
                        </ZoneTemplate>
                    </WebPartPages:WebPartZone>
                </div>
                <div class="large-4 columns">
                    
                    <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="foundationRow2Col2" Title="foundationRow2Col2" FrameType="None" Orientation="Vertical">
                        <ZoneTemplate>
                            
                        </ZoneTemplate>
                    </WebPartPages:WebPartZone>
                </div>
                <div class="large-4 columns">
                    
                    <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="foundationRow2Col3" Title="foundationRow2Col3" FrameType="None" Orientation="Vertical">
                        <ZoneTemplate>
                            
                        </ZoneTemplate>
                    </WebPartPages:WebPartZone>
                </div>
            </div>
            <!-- Call to Action Panel -->
            <div class="row">
                <div class="large-12 columns">
                    
                    <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="foundationRow3" Title="foundationRow3" FrameType="None" Orientation="Vertical">
                        <ZoneTemplate>
                            
                        </ZoneTemplate>
                    </WebPartPages:WebPartZone>
                </div>
            </div>
            <!-- Footer -->
            <footer class="row">
                <div class="large-12 columns">
                    <hr />
                    <div class="row">
                        <div class="large-6 columns">
                            
                            <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="foundationRow4Col1" Title="foundationRow4Col1" FrameType="None" Orientation="Vertical">
                                <ZoneTemplate>
                                    
                                </ZoneTemplate>
                            </WebPartPages:WebPartZone>
                        </div>
                        <div class="large-6 columns">
                            
                            <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="foundationRow4Col2" Title="foundationRow4Col2" FrameType="None" Orientation="Vertical">
                                <ZoneTemplate>
                                    
                                </ZoneTemplate>
                            </WebPartPages:WebPartZone>
                        </div>
                    </div>
                </div>
            </footer>
        </asp:Content>