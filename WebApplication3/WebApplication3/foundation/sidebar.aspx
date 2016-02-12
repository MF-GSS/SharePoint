<%-- SPG:

This HTML file has been associated with a SharePoint Page Layout (.aspx file) carrying the same name.  While the files remain associated, you will not be allowed to edit the .aspx file, and any rename, move, or deletion operations will be reciprocated.

To build the page layout directly from this HTML file, simply fill in the contents of content placeholders.  Use the Snippet Generator at http://safea0zbmsp01:18000/_layouts/15/ComponentHome.aspx?Url=http%3A%2F%2Fsafea0zbmsp01%3A18000%2F%5Fcatalogs%2Fmasterpage%2Ffoundation%2Fsidebar%2Easpx to create and customize additional content placeholders and other useful SharePoint entities, then copy and paste them as HTML snippets into your HTML code.   All updates to this file within content placeholders will automatically sync to the associated page layout.

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
            <SharePoint:SPTitleBreadcrumb runat="server" RenderCurrentNodeAsLink="true" SiteMapProvider="SPContentMapProvider" CentralAdminSiteMapProvider="SPXmlAdminContentMapProvider">
            
            <PATHSEPARATORTEMPLATE>
            <SharePoint:ClusteredDirectionalSeparatorArrow runat="server" />
            </PATHSEPARATORTEMPLATE>
            </SharePoint:SPTitleBreadcrumb>
        </asp:Content><asp:Content runat="server" ContentPlaceHolderID="PlaceHolderMain">
            <div class="row">
                <!-- Main Content Section -->
                <!-- This has been source ordered to come first in the markup (and on small devices) but to be to the right of the nav on larger screens -->
                <div class="large-9 columns push-three">
                    
                    <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="foundationRow1Col1" Title="foundationRow1Col2" FrameType="None" Orientation="Vertical">
                        <ZoneTemplate>
                            
                        </ZoneTemplate>
                    </WebPartPages:WebPartZone>
                </div>
                <!-- Nav Sidebar -->
                <!-- This is source ordered to be pulled to the left on larger screens -->
                <div class="large-3 columns pull-nine">
                    
                    <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="foundationRow1Col2" Title="foundationRow1Col2" FrameType="None" Orientation="Vertical">
                        <ZoneTemplate>
                            
                        </ZoneTemplate>
                    </WebPartPages:WebPartZone>
                </div>
            </div>
            <!-- Footer -->
            <footer class="row">
                <div class="large-12 columns">
                    
                    <WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="foundationRow2" Title="foundationRow2" FrameType="None" Orientation="Vertical">
                        <ZoneTemplate>
                            
                        </ZoneTemplate>
                    </WebPartPages:WebPartZone>
                </div>
            </footer>
        </asp:Content>